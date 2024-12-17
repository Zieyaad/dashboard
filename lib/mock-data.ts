export const mockData = {
  user: {
    name: "Adrian Stefan",
    email: "adrian@mrfertility.co.za",
    initials: "AS",
    nav: [
      {
        title: "Profile",
        url: "/dashboard/profile",
      },
      {
        title: "Logout",
        url: "https://zieyaadmoses.com/",
      },
    ],
  },
  dashboard: {
    intro: {
      title: "Welcome Adrian!",
      description:
        "Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel risus eleifend laoreet.",
    },
    stats: [
      {
        title: "Total Practices",
        amount: "11",
        percentageChange: "+15%",
        icon: "image-practices",
      },
      {
        title: "Total Subscribers",
        amount: "261",
        percentageChange: "+15%",
        icon: "image-subscribers",
      },
      {
        title: "Total Treatments",
        amount: "135",
        percentageChange: "+15%",
        icon: "image-treatments",
      },
      {
        title: "Total Consents",
        amount: "135",
        percentageChange: "+15%",
        icon: "image-consents",
      },
      {
        title: "Total Consents signed",
        amount: "2159",
        percentageChange: "+15%",
        icon: "image-consents",
      },
      {
        title: "Total Fact sheets read",
        amount: "2159",
        percentageChange: "+15%",
        icon: "image-base",
      },
    ],
    progressStats: [
      {
        label: "Pending",
        percentage: 24,
        color: "#FF966B",
      },
      {
        label: "Registered",
        percentage: 56,
        color: "#54D62C",
      },
      {
        label: "Post Treatment",
        percentage: 20,
        color: "#1890FF",
      },
    ],
  },
  navigation: [
    {
      id: 1,
      label: "Dashboard",
      href: "/dashboard",
      icon: "icon-home",
    },
    {
      id: 2,
      label: "My Profile",
      href: "/dashboard/profile",
      icon: "icon-user",
    },
    {
      id: 3,
      label: "Manage Practices",
      href: "/dashboard/practices",
      icon: "icon-practices",
    },
    {
      id: 4,
      label: "Logs",
      href: "/dashboard/logs",
      icon: "icon-file",
    },
  ],
  notifications: [
    {
      id: 1,
      title: "New Registration",
      description: "Alex Fredricks",
      timestamp: "07 Oct 2022",
      type: "registration",
      img: "/assets/images/image-test_user.png",
    },
    {
      id: 2,
      title: "New Consent Added",
      description: "Blake Robertson",
      timestamp: "07 Oct 2022",
      type: "consent",
      img: "/assets/images/image-test_user.png",
    },
  ],
  practices: {
    title: "Newest Practices",
    pageTitle: "Manage Practices",
    description:
      "Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel risus eleifend laoreet.",
    tableHeadings: [
      {
        title: "Practice Name",
      },
      {
        title: "Tel No",
      },
      {
        title: "Email",
      },
      {
        title: "Date Created",
      },
      {
        title: "Status",
      },
      {
        title: "Actions",
      },
    ],
    items: [
      {
        id: 1,
        name: "Cape Fertility Clinic",
        phone: "+21 794 3956",
        email: "info@capefertility.co.za",
        dateCreated: "04/10/2021",
        status: "active",
      },
      {
        id: 2,
        name: "Aevitas Fertility Clinic",
        phone: "+27 821 4567",
        email: "contact@aevitas.co.za",
        dateCreated: "15/11/2021",
        status: "active",
      },
      {
        id: 3,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
      {
        id: 4,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
      {
        id: 5,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
      {
        id: 6,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
      {
        id: 7,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
      {
        id: 8,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
      {
        id: 9,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
      {
        id: 10,
        name: "Medfem Fertility Clinic",
        phone: "+27 113 4490",
        email: "info@medfem.co.za",
        dateCreated: "22/12/2021",
        status: "disabled",
      },
    ],
    seeAll: "See All",
  },
  profile: {
    pageTitle: "My Profile",
    description:
      "Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel risus eleifend laoreet.",
  },
  logs: {
    pageTitle: "Activity Logs",
    description:
      "Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel risus eleifend laoreet.",
  },
};
