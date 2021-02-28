//=============================================================================
// medibank.js v1.1
//=============================================================================

//=============================================================================

/** Owner Ekta
 *  Creaded on : 28/02/2021 by Ekta
 *  Fetching data from Medibank API and appending data to div on html page
 *  ES6 arrow function and let usage
 *  Modified on : #
 */
    const api_url ="https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";
    fetch(api_url)
    .then(response => response.json())
    .then(data => appendData(data))
    .catch((error) => {console.error("Error:", error);});

    let maledata = new Array();
    let femaledata = new Array();

    petcheck=(dataobj, petsarray)=>{
        if(petsarray.type === "Cat" && petsarray.type !== null){
            if(dataobj.gender === "Male"){
            maledata.push(petsarray.name);
            }
            else if(dataobj.gender === "Female"){
                femaledata.push(petsarray.name);
            }
        }
    }
    appendData = (data)=> {
        let mainContainer = document.getElementById("myData");
        let div = document.createElement("div");
        for (let i in data) {
            for (let j in data[i].pets){
                let petsarray = data[i].pets[j];
                petcheck(data[i], petsarray)
            }
            mainContainer.appendChild(div);
        }
        maledata.sort();
        femaledata.sort();
        sortnames = (gender, genderid) => {
            for (let k in gender) {
                document.getElementById(genderid).innerHTML +=
               "<li><i class='fas fa-cat'></i>" + gender[k] + "</li>";
            }
        }
        sortnames(maledata, "male-list");
        sortnames(femaledata, "female-list");
    }
    /*
    End of file
    */
