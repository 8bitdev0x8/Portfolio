import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // Import rehypeRaw
import "./CS6042.css";

const CS6042: React.FC = () => {
  const markdownContent = `
# CS6042 - INTERACTIVE MEDIA PROJECT

## In-class Workshop - Games, Algorithms, and Interactions

## Procedural Drawing  

Design a game by which you will make drawings on a paper.  

1. **Choose your tools** for the game (e.g., a die, rock-paper-scissors, etc.).  
2. **Make up the rules** for how the game will generate drawings.  
3. **Execute** the game and generate a few drawings on a sheet of paper.  

![Procedural Drawing](/Portfolio/static/images/Procedural_Drawing.jpeg)


![Procedural Drawing P5JS](/Portfolio/static/images/Procedural_Drawing_p5js.jpeg)

## Outputs

![Procedural Drawing 1](/Portfolio/static/images/Procedural_Drawing_Output1.jpeg)
![Procedural Drawing 2](/Portfolio/static/images/Procedural_Drawing_Output2.jpeg)
![Procedural Drawing 3](/Portfolio/static/images/Procedural_Drawing_Output3.jpeg)

---

##  Algorithmic Music Software

<video width="640" height="360" controls>
  <source src="/Portfolio/static/videos/isleoftune.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


---


## Audio Primer  

### Editing and Composing  

[audio sample](https://freesound.org/people/ne0_h3x/sounds/790022/)

<audio controls>
  <source src="https://freesound.org/people/ne0_h3x/sounds/790022/download/790022__ne0_h3x__sample.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## Interactive/Algorithmic Soundscape Performance

### Performance Design: Freesound Loop Generator (Customized)

For my performance design, I chose to use the [Freesound Loop Generator](https://ffont.github.io/freesound-loop-generator/) (customized from its [source code](https://github.com/jojy-ul/Algorithmic-Soundscape)) because it is an open-source tool, allowing me the flexibility to modify its code according to my specific needs. Open-source software presents an opportunity to explore creative possibilities beyond its default features, and this aspect was a fundamental motivation behind my selection. The ability to experiment with and expand upon an existing platform rather than building one from scratch allowed me to focus more on the artistic and interactive aspects of the performance.

## Challenges and Enhancements  

One limitation I encountered while working with this software was that it loaded search-based sounds or other methods from [Freesound.org](https://freesound.org/). While this feature provides an element of spontaneity, it restricted my ability to curate specific sounds for my performance. My vision required a more controlled approach, where I could implement the option to load sounds directly from my own Freesound.org account—sounds that I had personally uploaded and curated for this project.  

This challenge, while initially frustrating, became a source of inspiration, as it pushed me to engage more deeply with the software's architecture and consider ways to enhance its functionality. Additionally, the ability to export sequences as MIDI files was particularly useful, as it allowed for further integration with other digital audio workstations, enabling a more refined and polished output.  

## Influence of Procedural Generation  

The rules for my performance were inspired by the in-class workshop on **"Games, Algorithms, and Interactions."** In this workshop, procedural drawing rules were used, where a die is rolled to determine aspects of their drawings. I was intrigued by this element of chance and procedural generation, and I wanted to apply a similar approach to my performance design. Instead of drawings, I incorporated a rule-based system where sound sequences were generated and manipulated based on a set of predefined constraints.  

## Custom Modifications  

As part of my modifications, I have implemented:  

- A **reset button** for the sequencer, making it easier to start fresh without manually clearing each step.  
- A **feature to load sounds directly from my Freesound.org account** (currently in progress), which will provide greater control over the selection of sounds, ensuring a more personalized and curated experience for the performance.  

By making these modifications, I aim to create a performance tool that balances structure and chance, offering both artistic control and algorithmic spontaneity.


`;

  return (
    <div className="cs6042-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
      
    </div>
  );
};

export default CS6042;
