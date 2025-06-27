const rizzLines = [
  "Say no again and I’ll kiss you slow enough to make time jealous.",
  "That ‘no’ didn’t stop me in my dreams — where your thighs were around my shoulders.",
  "Keep saying no, and I’ll keep whispering your name until it sounds like a prayer.",
  "You said no, but your breath hitched like you already imagined my fingers trailing lower.",
  "Every no you give me just makes me want to press you against the wall a little harder.",
  "One more ‘no’ and I’ll read you every thought I’ve had about your body — with my lips.",
  "That no only made me picture you underneath me, nails digging into my back.",
  "Say no again, and I swear I’ll ruin your lipstick before your resolve.",
  "You think I’m done? Baby, I haven’t even made you beg yet.",
  "Fine, I’ll stop. Unless you pull me back with that look again.",
  "Don’t act shy — you look like you'd moan just from my breath on your neck 😌"
];
function sayYes() {
  document.body.innerHTML = `
    <div class="envelope-wrapper">
      <div class="flap"></div>
      <div class="envelope">
        <div class="letter-content">
          <p>OMG really?? 😳💗</p>
          <p>i’m actually blushing so hard rn…</p>
          <p>I’ll stop smiling when my face breaks 😭</p>
          <p>you’re so cute i’m gonna start kicking my feet fr 😩</p>
        </div>
      </div>
    </div>
  `;
}

function sayNo(){

  const random = rizzLines[Math.floor(Math.random() * rizzLines.length)];
  document.getElementById("replace").innerHTML = `
    <h2>Oh… so it’s like that huh 😏</h2>
    <p>${random}</p>
  `;
}
