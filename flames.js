function calculateFlames() {
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    
    name1 = name1.toLowerCase().replace(/\s/g, '');
    name2 = name2.toLowerCase().replace(/\s/g, '');

  let name1Letters = name1.split('');
  let flames = ['f', 'l', 'a', 'm', 'e', 's'];

  for (let i = 0; i < name1Letters.length; i++) {
    let letter = name1Letters[i];

    if (name2.includes(letter)) {
      name1 = name1.replace(letter, '');
      name2 = name2.replace(letter, '');
    }
  }

  let totalCount = name1.length + name2.length;

  while (flames.length > 1) {
    index = (totalCount) % flames.length; 
    if(index==0){
        flames=flames.slice(0,flames.length-1);
    }else{
    flames=flames.slice(index,flames.length).concat(flames.slice(0,index-1))}
  }

  // Map the remaining letter to the corresponding relationship
  let relationship = '';
  switch (flames[0]) {
    case 'f':
      relationship = 'Friends';
      break;
    case 'l':
    relationship = 'Lovers';
      break;
    case 'a':
    relationship = 'Affectionate';
      break;
    case 'm':
    relationship = 'Marriage';
      break;
    case 'e':
    relationship = 'Enemies';
      break;
    case 's':
      relationship = 'Siblings';
      break;
    default:
    relationship = 'Error';
  }

  document.getElementById('result').textContent = 'Relationship: ' + relationship;
  }