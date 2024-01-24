const links = [
    {
      name: "Account",
      url: "/Kanbas/Account/Navigation/index.html",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
    },Í
    {
      name: "Calendar",
      url: "/Kanbas/Calendar/index.html",
    },
    {
      name: "Inbox",
      url: "/Kanbas/Inbox/index.html",
    },
  ];
  document.write(`
    <ul>
      ${links
        .map((link) => {
          return `<li><a href="${link.url}">${link.name}</a></li>`;
        })
        .join("")}
  </ul>     
    `);