export function osszeAllit(lista) {
    let txt = "";
  
    txt += `<table class="table table-stripped ">`;
    txt += `<tr class="table-dark"><th id ="nev">név ⇅</th>
      <th id ="kor">kor ⇅</th>
      <th id ="fajta">fajta ⇅</th>
      <th>törlés</th></tr>`;
    for (let index = 0; index < lista.length; index++) {
      txt += `<tr>`;
      for (const key in lista[index]) {
        txt += `<td>${lista[index][key]} </td>`;
      }
      txt += `<td><button id="t${index}" class="torolgomb" type="button">ჯ</button> </td>`;
      `</tr>`;
    }
    txt += `</table>`;
  
    return txt;
  }
 export function osszeAllitDivbe(lista) {
    let txt = "";
    txt += `<div class="container row mt-4">`;
    for (let index = 0; index < lista.length; index++) {
      txt += `<div class="card border col-sm-3" > `;
      txt += `<div class="card-body">`;
      txt += `<h4 class="card-title">${lista[index].nev}</h4>`;
      txt += `<p class="card-text">${lista[index].kor}</p>`;
      txt += `<p class="card-text">${lista[index].fajta}</p>`;
      txt += `<input type="submit" id="nez" class=" btn btn-sucess	" value="Nézd meg">`;
      txt += `</div>
        </div>`;
    }
    txt += `</div>`;
    return txt;
  }