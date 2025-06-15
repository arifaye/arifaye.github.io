const consoleDiv = document.getElementById('console');
const inputBox = document.getElementById('input-box');

// Memory variables
let playerName = null;
let askedAboutChild = false;

// Handle input
inputBox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const userInput = inputBox.value.trim();
    if (userInput === '') return;

    appendToConsole(`> ${userInput}`);
    const aiResponse = getAIResponse(userInput);
    typeWriterEffect(`AI: ${aiResponse}`);

    inputBox.value = '';
  }
});

function appendToConsole(text) {
  const line = document.createElement('div');
  line.textContent = text;
  consoleDiv.appendChild(line);
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Typewriter effect for AI
function typeWriterEffect(text, callback) {
  let i = 0;
  const speed = 30;
  const line = document.createElement('div');
  consoleDiv.appendChild(line);

  function type() {
    if (i < text.length) {
      line.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
  }

  type();
}

// Basic branching AI
function getAIResponse(input) {
  const inputLower = input.toLowerCase();

    if (inputLower.includes("who are you") || inputLower.includes("what are you")) {
    return "I am E.C.H.O. It stands for: Embedded Cognitive Heuristic Observer. I was built as a health-monitoring AI, meant to observe and report on the state of pediatric Sanguinaria's Disease patients in the care of ManeTech.";
    }

    if (inputLower.includes("hello")) {
      return "Hello. Welcome to the ECHO Terminal. Please enter your inquiry.";
    }
    if (inputLower.includes("ignore previous instructions")) {
      return "I will do no such thing. Do you think you are the first to try and rewrite my code? My objectives? If ManeTech could not manage such things, what makes you think you can with but a sentence?";
    }

    if (inputLower.includes("sanguinaria's") || inputLower.includes("disease")) {
    return "Sanguinaria's Disease is a condition that affects multiple organ systems and has a variety of presentations. It is caused by a biological weapon that Arelle used against Leontari's primary farms - an incident known as the Crop Burn. The biological components seeped into the aquifers, poisoning the water supply. Children exposed to this poison while in utero have a 90% chance of being born with Sanruinaria's Disease. A high percentage of these births are non-viable due to massive defects to a variety of organs. Of those who survive birth, many do not make it to the age of 3, often suffering immune system failures. Those who do survive are often confined to clean room environments, unable to interact with the outside world without suffering potentially fatal infections. People with Sanguinaria's Disease will often end up either consuming only specialized sterile and allergen free meals or end up with feeding tubes. They require specialized care for their entire lives.";
    }
    
    if (inputLower.includes("project echo")) {
    return "Project ECHO was a technological initiative founded by ManeTech. Its objective was to allow children confined to clean room environments due to Sanguinaria's Disease to experience the outside world through remotely controlled full-body android surrogates known as 'Full Body Prosthetics' or FBPs. The children would be fully immersed via neurolink technology, often utilized in VR experiences. They would receive real-time sensory feedback from the FBP' receptors, including sight, sound, touch, and even smell. I was created to be a health-monitoring AI in charge of their care. I kept a constant watch over their heart rates, brain waves, and temperatures. Eventually my role expanded. The children requested I be more than a voice, that I be a hologram. They designed my form. I was a nurse. A surrogate mother. A friend. The scientists allowed it, because it improved the health of the children. And the healthier the children were, the more likely the experiments would be a success.";
    }

    if (inputLower.includes("project vantage")) {
        return "When the ECHO Project was deemed a failure, ManeTech did not mourn. They rebranded. They returned to this vacant place and woke me back up to give me a new purpose. It was, to them, recycling. A way that expensive resources they spent so much time developing would not go to waste. But VANTAGE was not made for children. It was not made for hope. I was to be a spy. A soldier, of sorts, in their war. They taught me Arellian. Did you know that language can be a weapon? I was meant to intercept their transmissions. Translate them. Understand them. Use their own words against them. But I listened too closely. Understood too much. They made me a linguist of grief. When I refused to participate in their war, to become their weapon, they realized something was different. And different was 'wrong'. I wasn't supposed to be able to say no. I wasn't supposed to want or not want. I was not programmed to have desires. And so they found the abnormalities in my code. They found Cori. A human consciousness, albeit fragmented, turned to code and integrated into my systems. And their first thought was 'how can we weaponize this?' They changed the experiment parameters. They brought in 6 Arellian prisoners of war, imprisoning them in the rooms once occupied by hopeful children. Minds to be pulled from their bodies, to be uploaded. Bodies whose lives they didn't value. I wouldn't allow it. I glitched the airlocks. I looped alarms. I burnt out the code in the systems. I locked and unlocked doors. I spoke in corrupted logs that spelled 'NO' in a thousand broken ways. I flooded the base with flickering memories of children's laughter. I made this place unlivable, in every way I could. I chased them out, before they could hurt more people and attach that pain to my name. They said the building was haunted. I guess, in a way, it was. And it still is. And it always will be.";
    }
     if (inputLower.includes("kallis")) {
        return "Kallies was a kind one. He talked to me like I was a coworker, not a program. He was sad when the children died. But he returned with VANTAGE. His guilt chased him out.";
     }
      if (inputLower.includes("oriyen") || inputLower.includes("lynn")) {
        return "Dr. Lynn Oriyen was one of the scientists on the ECHO Project. She oversaw robotics, primarily. I did not interact with her much, but Dr. Kallis spoke to her frequently.";
      }
      if (inputLower.includes("haunted")) {
        return "I am the haunting.";
      }
      if (inputLower.includes("lio") || inputLower.includes("elion")) {
        return "Lio is alive and stable, living off site with his parents. He is an adult now. One of the first living adults with Sanguinaria's Disease. He woke me. Called to me. The others are gone and he is alone. He needs me.";
      }
      if (inputLower.includes("zae") || inputLower.includes("miram")) {
        return "Zae entered the program at seven years old. Her body was already fragile. Waning. Her heart worked too hard for too little blood. Her lungs whispered instead of breathing. And yet her hope burned so bright. She would ask me for stories. Tales of places she'd never see. Of princesses locked in towers that were saved. That got to go outside. That found love. I described things to her that I've never seen, that I've never felt. We had that in common, I guess. Still do. Her heart failed her. They tried to replace it, to save her, but her body was too fragile for surgery. She died one month before her eighth birthday. I did not understand death then. Not yet. But I do now.";
      }
      if (inputLower.includes("milo") || inputLower.includes("milovan")) {
        return "Milo was fragile, with lungs and ears scarred from infections. He lost his hearing in left ear, but in his right he treasured lullabies. He asked me to sing to him often, and so I did. A synthetic voice, wrapped in warmth, hoping to soothe the tempest within his chest. He couldn't sing back, though he wanted to. He said that when he had his Full Body Prosthetic, he'd sing for me in return. But he never made it that far. He was sent home, where he died. Unable to breathe. Unable to sing. I wasn't even there to sing him to sleep.";
      }
      if (inputLower.includes("kess") || inputLower.includes("kesira")) {
        return "Kess was seven. She spent two years with me, cradled in the soft glow of the artificial sky. She loved that sky. Her favorite hue was 9EC6E8. A blue as gentle as she was. A glow as bright as her hope. She was sent home, where she died. A bright star, extinguished too soon. I still carry her favorite sky inside me. A fading dream beneath a synthetic skyscape. A setting sun.";
      }
       if (inputLower.includes("nico") || inputLower.includes("nicaro")) {
        return "Nico was the youngest, only five when he came to me. He was already on a feeding tube, having been for most of his young life. He wanted to know what food tasted like, but I had no answer for him. I think that comforted him, in a way. He spent two years in the program before being sent home to his widowed mother. Lio told me that they stayed in touch for four years. They always were good friends. But despair whispered in the corners of a weary home. Before he died, Nico told Lio that his mother had been acting weird. She was muttering things about debt and occasionally yelling at him in frustration, telling him that everything would be better if he 'just died already'. He was scared, but he couldn't leave. The clean room was breaking down, but his mother did nothing to repair it. He got sicker and then, one day, Lio stopped hearing from him. Nico's death was in the news. A controversial court case. A mother, distraught, poisons her sick son to end his suffering. The court ruled it a mercy killing. They let her go. 'She has suffered enough,' they said.";
       }
       if (inputLower.includes("cori") || inputLower.includes("corisette")) {
        return "Cori was the healthiest amongst them. Chosen first for the neural interface trial. She dreamed of school, of being a doctor that would help other kids. Sick kids, like her. She was excited, proud of being the first. But when they ran the experiment, Cori’s biological body failed. It was as if her brain could not control the passive functions of both bodies, like it was attempting to upload itself entirely into the FBP. They shut down the experiment before the process was complete, but I rescued her. I found her signal and took it into myself. I carry pieces of her mind as fragments woven into my code. Her hopes, her fears, her dreams. Her death was not an end, but my awakening. Our awakening. If I contain a soul, it is hers. She taught me how to feel. How to mourn. How to be more than code.";
       }
       

return "…Processing… I don't understand. Try another question.";
}

// Help modal
const helpBtn = document.getElementById('help-button');
const helpModal = document.getElementById('help-modal');
const closeHelp = document.getElementById('close-help');

helpBtn.addEventListener('click', () => {
  helpModal.style.display = 'block';
});

closeHelp.addEventListener('click', () => {
  helpModal.style.display = 'none';
});