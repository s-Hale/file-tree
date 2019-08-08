const originalData = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06"
  },
  {
    type: "pdf",
    name: "Vehicle Policy",
    added: "2019-01-06"
  },
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06"
  },
  {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02"
      },
      {
        type: "folder",
        name: "Nested",
        files: [
          {
            type: "doc",
            name: "Another Layer",
            added: "2017-05-02"
          },
          {
            type: "doc",
            name: "Down",
            added: "2017-05-03"
          }
        ]
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03"
      }
    ]
  },
  {
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12"
  },
  {
    type: "folder",
    name: "Misc",
    files: [
      {
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24"
      },
      {
        type: "doc",
        name: "Christmas party",
        added: "2017-12-01"
      }
    ]
  }
];

export default originalData;
