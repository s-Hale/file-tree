const originalData = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
    id: "10001"
  },
  {
    type: "pdf",
    name: "Vehicle Policy",
    added: "2019-01-06",
    id: "10002"
  },
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
    id: "10003"
  },
  {
    type: "folder",
    id: "12003",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
        id: "10004"
      },
      {
        type: "folder",
        id: "12002",
        name: "Nested",
        files: [
          {
            type: "doc",
            name: "Another Layer",
            added: "2017-05-02",
            id: "10005"
          },
          {
            type: "doc",
            name: "Down",
            added: "2017-05-03",
            id: "10006"
          }
        ]
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
        id: "10007"
      }
    ]
  },
  {
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12",
    id: "10008"
  },
  {
    type: "folder",
    id: "12001",
    name: "Misc",
    files: [
      {
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24",
        id: "10009"
      },
      {
        type: "doc",
        name: "Christmas party",
        added: "2017-12-01",
        id: "10010"
      }
    ]
  }
];

export default originalData;
