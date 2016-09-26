define({ "api": [
  {
    "type": "post",
    "url": "/api/vendors/",
    "title": "Adds Vendor to BuzzyDoc and hits People Hub api",
    "version": "0.0.0",
    "name": "Add",
    "group": "Vendor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org_name",
            "description": "<p>Vendor's organizarion name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "is_legacy",
            "description": "<p>Vendor is legacy client or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "min_deposit",
            "description": "<p>Minimum deposit made by Vendor.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "threshold_value",
            "description": "<p>Minimum value deposit can depriciate to.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "reward_template_id",
            "description": "<p>Vendor's reward template type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>Contains details of admin created with the Vendor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name of User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name of User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username for identifying user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User's Phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>is primary contact.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>status of the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     HTTP/1.1 200 OK\n{\n \"response\": {\n       \"status\": true,\n       \"data\": {\n               \"buzzydoc_id\": 3,\n               \"peoplehub_id\": 26\n               }\n             }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "buzzyadmin/src/Controller/Api/VendorsController.php",
    "groupTitle": "Vendor"
  }
] });
