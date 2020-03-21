export default {
    "type": "document",
    "name": "profile",
    "title": "Profile",
    "fields": [
        {
            "type": "string",
            "name": "name",
            "title": "Name",
            "description": "Name of the profile",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "job_title",
            "title": "Job Title",
            "description": "Profiles Job Title",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Date",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "thumb_img_path",
            "title": "Featured Image",
            "description": "The image shown in the project page.",
            "validation": null
        },
        {
            "type": "image",
            "name": "content_img_path",
            "title": "Alternative Featured Image",
            "description": "The image shown in the single project.",
            "validation": null
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Project Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "project",
                    "profile"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Project URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    
    "preview": {
        "select": {
            "title": "name"
        }
    }
}