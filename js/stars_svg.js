let star_border=`<svg class="stars" viewBox="0 0 147 139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M73.5 8.09016L88.2977 53.6327L88.859 55.3602H90.6753H138.562L99.8208 83.5071L98.3513 84.5747L98.9126 86.3021L113.71 131.845L74.9695 103.698L73.5 102.63L72.0305 103.698L33.2897 131.845L48.0874 86.3021L48.6487 84.5747L47.1792 83.5071L8.43839 55.3602H56.3247H58.141L58.7023 53.6327L73.5 8.09016Z" stroke="#FFD700" stroke-width="5"/>
    </svg>`;

let star_filled=`<svg class="stars" viewBox="0 0 147 139" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M73.5 0L90.6753 52.8602H146.256L101.29 85.5296L118.466 138.39L73.5 105.72L28.5344 138.39L45.7097 85.5296L0.744179 52.8602H56.3247L73.5 0Z" fill="#FFD700"/>
  </svg>`

let stars={
  '0':[
    star_border,star_border,star_border,star_border,star_border
  ],
  '1':[
    star_filled,star_border,star_border,star_border,star_border
  ],
  '2':[
    star_filled,star_filled,star_border,star_border,star_border
  ],
  '3':[
    star_filled,star_filled,star_filled,star_border,star_border
  ],
  '4':[
    star_filled,star_filled,star_filled,star_filled,star_border
  ],
  '5':[
    star_filled,star_filled,star_filled,star_filled,star_filled
  ]
}