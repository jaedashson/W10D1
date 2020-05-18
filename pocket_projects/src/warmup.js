
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  // debugger;
  // while (htmlElement.children.length > 1) {
  //   htmlElement.removeChild(htmlElement.lastChild);
  // }

  for (let i = 0; i < htmlElement.children.length; i++) {
    htmlElement.removeChild(htmlElement.children[i]);
  }


  //htmlElement.childNodes[0]
// if (clockDiv.hasChildNodes()) {
//       clockDiv.removeChild(clockDiv.childNodes[0]);
//     }
  const p = document.createElement('P');
  p.innerText = string;
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);



