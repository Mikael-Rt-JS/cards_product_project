let cards_block=document.querySelector(`.cards_block`);


function middle_rating(raitings){
  let r_1=raitings[0]*1;
  let r_2=raitings[1]*2;
  let r_3=raitings[2]*3;
  let r_4=raitings[3]*4;
  let r_5=raitings[4]*5;
  let count=raitings[0]+raitings[1]+raitings[2]+raitings[3]+raitings[4];
  let all=r_1+r_2+r_3+r_4+r_5;
  
  if(all===0 & count===0){
    return 0;
  }else{
    let middle=all/count;
    return middle;
  }
}

function card(products){
  let str="";
  for(let i=0;i<products.length;i++){
    str+=`<div class="card">
    <img 
      src="${products[i]['images']}" class="card_img" 
      alt="${products[i]['title']}" 
      title="${products[i]['title']}" 
      width="280" 
      height="180"/>
    <div class="card_rating">`;

    let middle_num=middle_rating([
      products[i]['raiting_1'],
      products[i]['raiting_2'],
      products[i]['raiting_3'],
      products[i]['raiting_4'],
      products[i]['raiting_5']
    ]);

    if(Math.floor(middle_num)>5){ // 6... > 5
      str+=stars[`5`].join('');
    }else{
      str+=stars[`${Math.floor(middle_num)}`].join('');
    }

    str+=`</div>
      <h3>${products[i]['title']}</h3>
      <span class="card_price">
        ${products[i]['price']}
        <sup class="currency">&dollar;</sup>
      </span>
      <button>+ Add</button>
    </div>`;
  }

  cards_block.innerHTML=str;
    
}

card(data_products)
