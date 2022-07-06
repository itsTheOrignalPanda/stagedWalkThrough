var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.010325979999997514,
        "pitch": 0,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": -0.4221089915311893,
          "pitch": 0.07979316826067873,
          "rotation": 0,
          "target": "2-3"
        },
        {
          "yaw": -1.5120633143185458,
          "pitch": 0.09992771668078682,
          "rotation": 5.497787143782138,
          "target": "1-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.010325979999997514,
          "pitch": 0,
          "title": "Information",
          "text": "<div>This is the example of a staged Room</div>"
        }
      ]
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.525420090990239,
          "pitch": 0.1313101384529567,
          "rotation": 0.7853981633974483,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.111536722266977,
          "pitch": 0.09210860233790363,
          "rotation": 7.0685834705770345,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
