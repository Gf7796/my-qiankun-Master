


const routes = [
  {
    path: "/",
    component: "@/layouts/index",
    routes: [
      {
        path: "/",
        component: "@/pages/layouts/index",
        routes: [
          {
            path: "/home",
            component: "@/pages/home/index",
          },
          {
            path: "/app1",
            component: "@/pages/app1/index",
          },
          {
            path: "/app2",
            component: "@/pages/app2/index",
          },
          {
            path: "/app3",
            component: "@/pages/app3/index",
          }
        ]
      },
    ]
  }
]

export default routes
