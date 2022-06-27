document.getElementById('kgInput').addEventListener('input',
function(e){
  let kgs = e.target.value;
  document.getElementById('poundsOutput').innerHTML = kgs*2.20462262;
});

document.getElementById('kmInput').addEventListener('input',
function(e){
  let kms = e.target.value;
  document.getElementById('milesOutput').innerHTML = kms*1000;
});
document.getElementById('fahInput').addEventListener('input',
function(e){
  let fahs = e.target.value;
document.getElementById('celisusOutput').innerHTML = (fahs-32)*9/5;;
});
