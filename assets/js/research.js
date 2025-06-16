/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Gesture Based Control System",
    authors: "Akshay Bhandari, Anmol Chopra and Sagar Rishi",
    conferences: "International Journal of Applied Research Vol. 2, Issue 4, Part K (2016)",
    image: "assets/images/research-page/gesture.png",
	link: "https://www.allresearchjournal.com/archives/?year=2016&vol=2&issue=4&part=K&ArticleId=1856",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences}</div>

                    <div class="d-flex" style="margin-right:5%;">
                        <button onclick="window.open('${link}')" target="_blank" class="button button-accent button-small text-right button-abstract " type="button" >
                            Link
                        </button>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
