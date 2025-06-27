

const rizzLines  = [
  "No? Then explain why you're already breathless just from me standing this close.",
  "Say no again, and I’ll lean in slow enough to make your knees weak before I even touch you.",
  "You’re lucky I’m gentle. Because right now, I’m picturing your hands tied and your voice shaking.",
  "Don’t pretend. Your eyes have been begging louder than your mouth.",
  "No? Then why does your skin react like it remembers my touch?",
  "You keep saying no, but your body’s already leaning into mine.",
  "Every no just makes me want to pin you down and ruin you — slowly.",
  "Baby, I don’t need to hear yes. I just need to hear you moan it later.",
  "One more no and I’m tracing every inch of you — with my mouth.",
  "That no sounded shaky. Want me to press against you and ask again?"
];
function sayYes() {
  document.body.innerHTML = `
    <div class="container">
      <h2>OMG really?? 😳💗</h2>
      <p>i’m actually blushing so hard rn… I’ll stop smiling when my face breaks 😭</p>
      <p>you're so cute i’m gonna start kicking my feet fr 😩</p>
      </div>
      
  `;}
function sayNo(){

  const random = rizzLines[Math.floor(Math.random() * rizzLines.length)];
  document.getElementById("replace").innerHTML = `
    <h2>Oh… so it’s like that huh 😏</h2>
    <p>${random}</p>
  `;
}
