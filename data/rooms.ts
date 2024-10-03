const rooms = [
  {
    name: "Classic Suite",
    slug: "classic-suite",
    description:
      "Featuring a terrace with sea views & private bathroom. The suites have air-conditioning, bar fridge, satellite TV & coffee/tea -making facilities. Please note; 1 suite has a double bed and the others 2 single beds which can be made-up as a king-size bed upon request. There is also a double sleeper sofa in each suite.",
    images: [
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-1682bbe39313fd4e1680081676.jpg?ts=1680081678",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-17481b873a1615f81680081752.jpg?ts=1680081753",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-2.jpg?ts=1573313603",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-c3d7d5e4bc04d5aa1680082341.jpg?ts=1680082343",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-3.jpg?ts=1605084485",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-74bf1e059e1eaad11680082429.jpg?ts=1680082431",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-4.jpg?ts=1605084485",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-0c4fd7c526d7ffd51680082474.jpg?ts=1680082477",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-5.jpg?ts=1605084485",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-b985e055038507fd1680082523.jpg?ts=1680082525",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-6.jpg?ts=1605084485",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-7d0c0d8f81fcdb961680082628.jpg?ts=1680082631",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-7.jpg?ts=1573313603",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-cac296713cec819d1680082620.jpg?ts=1680082622",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-99c756ed0941e2e51680082638.jpg?ts=1680082640",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8931-5cbe3d2590fe0a071680082611.jpg?ts=1680082613",
    ],
    attributes: {
      view: "Sea View",
      bathroom: "Private",
      breakfast_included: true,
    },
  },
  {
    name: "Standard Sea View",
    slug: "standard-sea-view",
    description:
      "This air-conditioned room is brightly decorated and features a satellite TV and tea-and-coffee-making facilities. The private bathroom includes a shower and free toiletries.",
    images: [
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8930-27177c8458957c981680249134.jpg?ts=1680249137",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8930-4a72ff8e2f2292ac1680515512.jpg?ts=1680515514",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8930-592d3e06d499f4bc1680515534.jpg?ts=1680515536",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8930-6ad1e2e92f736e501680515525.jpg?ts=1680515527",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8930-9d8d04d408d4c37d1680249145.jpg?ts=1680249148",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8930-e451bdbed46c4e591680522970.jpg?ts=1680522973",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-8930-ee62fa4f0f433d711680522988.jpg?ts=1680522990",
    ],
    attributes: {
      view: "Sea View",
      bathroom: "Private",
      breakfast_included: true,
    },
  },
  {
    name: "Pool and Sea Facing",
    slug: "pool-and-sea-facing",
    description:
      "Sea facing room leading onto the pool deck. This air-conditioned room is brightly decorated and features a satellite TV and tea-and-coffee-making facilities, including a private bathroom with free toiletries.",
    images: [
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-57565-1bfc1ebe3bae97091696692868.jpg?ts=",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-57565-c6136ebfaa4d92ac1696692866.jpg?ts=",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-57565-7f72cafac689b3341696693000.jpg?ts=",
    ],
    attributes: {
      view: "Sea View",
      bathroom: "Private",
      breakfast_included: true,
    },
  },
  {
    name: "Standard Room",
    slug: "standard-rooms",
    description:
      "This air-conditioned room is brightly decorated and features a satellite TV and tea-and-coffee-making facilities. Each has a private bathroom with free toiletries. lease note that this Standard Rooms has NO sea views. We will do our best to secure a room with a sea view should you request, but we cannot guarantee this. For a guaranteed sea view room, please consider our Classic Suites.",
    images: [
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-188f597057106afa1680515681.jpg?ts=1680515683",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-eff7d031dd8b18d71680515763.jpg?ts=1680515765",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-3ae897d21266fd8f1680515715.jpg?ts=1680515717",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-70a745a8f7c5ff221680515789.jpg?ts=1680515791",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-d15054df5bd6b3601680515756.jpg?ts=1680515757",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-62d0c5367ffbc3231680515697.jpg?ts=1680515699",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-7842edfe82cea3bf1680515723.jpg?ts=1680515725",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-ab7162191b9087401680515706.jpg?ts=1680515708",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-07f077164bdfa62f1680516003.jpg?ts=1680516005",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-0b8110cd227646de1680515994.jpg?ts=1680515996",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-827bf7812651944f1680515945.jpg?ts=1680515947",
      "https://img.raccoonstatic.com/user/rooms/a786feb98035eb1b-22354-eaaa7b5af6d4ea7b1680515920.jpg?ts=1680515922",
    ],
    attributes: {
      view: "Standard View",
      bathroom: "Private",
      breakfast_included: true,
    },
  },
];
