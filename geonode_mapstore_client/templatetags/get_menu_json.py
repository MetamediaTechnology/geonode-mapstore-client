from avatar.templatetags.avatar_tags import avatar_url
from django import template
from django.conf import settings
from geonode.base.models import Configuration, Menu, MenuItem

register = template.Library()


def _handle_single_item(menu_item):
    m_item = {}
    m_item['type'] = 'link'
    m_item['href'] = menu_item.url
    m_item['label'] = menu_item.title
    if menu_item.blank_target:
        m_item['target'] = '_blank'
    return m_item

def _is_mobile_device(context):
    if context and 'request' in context:
        req = context['request']
        return req.user_agent.is_mobile
    return False

@register.simple_tag(takes_context=True)
def get_base_left_topbar_menu(context):

    is_mobile = _is_mobile_device(context)

    return [
        {
            "label": "Data",
            "type": "dropdown",
            "items": [
                {
                    "type": "link",
                    "href": "/catalogue/#/search/?f=dataset",
                    "label": "Datasets"
                },
                {
                    "type": "link",
                    "href": "/catalogue/#/search/?f=document",
                    "label": "Documents"
                },
                {
                    "type": "link",
                    "href": "/services/?limit=5",
                    "label": "Remote Services"
                } if not is_mobile else None
            ]
        },
        {
            "type": "link",
            "href": "/catalogue/#/search/?f=map",
            "label": "Maps"
        },
        {
            "type": "link",
            "href": "/catalogue/#/search/?f=geostory",
            "label": "GeoStories"
        },
        {
            "type": "link",
            "href": "/catalogue/#/search/?f=dashboard",
            "label": "Dashboards"
        },
        {
            "type": "link",
            "href": "/catalogue/#/search/?f=featured",
            "label": "Featured"
        }
    ]


@register.simple_tag(takes_context=True)
def get_base_right_topbar_menu(context):

    return [
        {
            "type": "link",
            "href": "/",
            "label": "Home"
        }
    ]

@register.simple_tag(takes_context=True)
def get_user_menu(context):

    is_mobile = _is_mobile_device(context)
    user = context.get('request').user

    if not user.is_authenticated:
        return [
            {
                "label": "Sign in",
                "type": "link",
                "href": "/account/keycloak/login/?process=login&next=/"
            },
            {
                "label": "Register",
                "type": "link",
                "href": "/account/keycloak/login/?process=signup&next=/"
            } if settings.ACCOUNT_OPEN_SIGNUP and not Configuration.load().read_only else None,
        ]

    devider = {
        "type": "divider"
    }

    profile_link = {
        "type": "link",
        # get href of user profile
        "href": user.get_absolute_url(),
        "label": "Profile"
    }

    logout = {
        "type": "link",
        "href": "/account/logout/?next=/",
        "label": "Log out"
    }

    if is_mobile:
        return [
            {
                # get src of user avatar
                "image": avatar_url(user),
                "firstname": user.first_name,
                "name": user.username,
                "superuser": user.is_superuser,
                "type": "dropdown",
                "className": "gn-user-menu-dropdown",
                "items": [
                    profile_link,
                    devider,
                    logout
                ]
            }
        ]
    profile = {
        # get src of user avatar
        "firstname": user.first_name,
        "name": user.username,
        "superuser": user.is_superuser,
        "image": avatar_url(user),
        "type": "dropdown",
        "className": "gn-user-menu-dropdown",
        "items": [
            profile_link,
            devider,
        ]
    }
    admin_only = [
        {
            "type": "link",
            "href": "/admin/",
            "label": "Admin"
        },
        {
            "type": "link",
            "href": "/admin/auth/group/",
            "label": "Group Permissions",
            "target": "_blank"
        },
        {
            "type": "link",
            "href": "/keycloaksync/synchronize_all",
            "label": "Sync Keycloak Users",
            "target": "_blank"
        },
        {
            "type": "link",
            "href": "/geoserver/",
            "label": "GeoServer"
        },
        devider,
    ] + [logout]

    if user.is_superuser:
        profile['items'].extend(admin_only)
    else:
        profile['items'].extend(logout)

    return [profile]


@register.simple_tag
def get_menu_json(placeholder_name):
    menus = {
        m: MenuItem.objects.filter(menu=m).order_by('order')
        for m in Menu.objects.filter(placeholder__name=placeholder_name)
    }
    ms = []
    for menu, menu_items in menus.items():
        if len(menu_items) > 1:
            m = {}
            m['label'] = menu.title
            m['type'] = 'dropdown'
            m['items'] = []
            for menu_item in menu_items:
                m_item = _handle_single_item(menu_item)
                m['items'].append(m_item)

            ms.append(m)
        if len(menu_items) == 1:
            m = _handle_single_item(menu_items.first())
            ms.append(m)
    return ms
