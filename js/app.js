var datas = [
    {
      id: 1,
      name: "Hasan Özyavru",
      link: "https://www.w3schools.com/default.asp",
      description: "Açıklama yazısı",
      status: false,
    },
    {
      id: 2,
      name: "İbrahim Ergül",
      link: "https://www.w3schools.com/default.asp",
      description: "Açıklama yazısı",
      status: true,
    },
    {
      id: 3,
      name: "İlkay Ergül",
      link: "https://www.w3schools.com/default.asp",
      description: "Açıklama yazısı",
      status: false,
    },
  ];

  function TableRowStatus(status) {
    if (status) {
      return "✓";
    } else {
      return "x";
    }
  }

  function CreateTableRow(data) {
    return `<tr>
              <th>${data.id}</th>
              <td>${data.name}</td>
              <td><a href="${data.link}">${data.link}</a></td>
              <td>${data.description}</td>
              <td class='text-center'>${TableRowStatus(data.status)}</td>
            </tr>`;
  }

  function CreateTable() {
    $tbody = $("#table tbody");
    $tbody.html("");
    let html = datas.map(function (data) {
      return CreateTableRow(data);
    });
    $tbody.append(html);
  }
