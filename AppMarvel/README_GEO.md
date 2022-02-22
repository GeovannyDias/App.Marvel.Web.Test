# Firebase - One project, multiple sites! Plus a boost in upload speed!

* **https://firebase.googleblog.com/2018/08/one-project-multiple-sites-plus-boost.html**
* **https://firebase.google.com/docs/hosting/multisites#cli-commands-with-deploy-targets**

```

firebase target:apply hosting target-name site-name
firebase target:apply hosting blog my-cool-blog
firebase deploy --only hosting:blog

firebase target:apply hosting marvel test-geo-marvel 

Configure targets for multiple sites in firebase.json:

{
  "hosting": {
    "target": "marvel",
    "public": "dist/AppMarvel",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

firebase deploy --only hosting:marvel

```



