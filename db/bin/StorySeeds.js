require("dotenv").config();

const mongoose = require("mongoose");
const Stories = require("../../models/Story.model");

const storySeeds = [
  {
    user: "60c2a7faf125df63803d9cd7",
    title: "Dagon",
    text: `I am writing this under an appreciable mental strain, since by tonight I shall be no more. Penniless, and at the end of my supply of the drug which alone makes life endurable, I can bear the torture no longer; and shall cast myself from this garret window into the squalid street below. Do not think from my slavery to morphine that I am a weakling or a degenerate. When you have read these hastily scrawled pages you may guess, though never fully realise, why it is that I must have forgetfulness or death.
    It was in one of the most open and least frequented parts of the broad Pacific that the packet of which I was supercargo fell a victim to the German sea-raider. The great war was then at its very beginning, and the ocean forces of the Hun had not completely sunk to their later degradation; so that our vessel was made a legitimate prize, whilst we of her crew were treated with all the fairness and consideration due us as naval prisoners. So liberal, indeed, was the discipline of our captors, that five days after we were taken I managed to escape alone in a small boat with water and provisions for a good length of time.
    When I finally found myself adrift and free, I had but little idea of my surroundings. Never a competent navigator, I could only guess vaguely by the sun and stars that I was somewhat south of the equator. Of the longitude I knew nothing, and no island or coast-line was in sight. The weather kept fair, and for uncounted days I drifted aimlessly beneath the scorching sun; waiting either for some passing ship, or to be cast on the shores of some habitable land. But neither ship nor land appeared, and I began to despair in my solitude upon the heaving vastnesses of unbroken blue.
    The change happened whilst I slept. Its details I shall never know; for my slumber, though troubled and dream-infested, was continuous. When at last I awaked, it was to discover myself half sucked into a slimy expanse of hellish black mire which extended about me in monotonous undulations as far as I could see, and in which my boat lay grounded some distance away.
    Though one might well imagine that my first sensation would be of wonder at so prodigious and unexpected a transformation of scenery, I was in reality more horrified than astonished; for there was in the air and in the rotting soil a sinister quality which chilled me to the very core. The region was putrid with the carcasses of decaying fish, and of other less describable things which I saw protruding from the nasty mud of the unending plain. Perhaps I should not hope to convey in mere words the unutterable hideousness that can dwell in absolute silence and barren immensity. There was nothing within hearing, and nothing in sight save a vast reach of black slime; yet the very completeness of the stillness and the homogeneity of the landscape oppressed me with a nauseating fear.
    The sun was blazing down from a sky which seemed to me almost black in its cloudless cruelty; as though reflecting the inky marsh beneath my feet. As I crawled into the stranded boat I realised that only one theory could explain my position. Through some unprecedented volcanic upheaval, a portion of the ocean floor must have been thrown to the surface, exposing regions which for innumerable millions of years had lain hidden under unfathomable watery depths. So great was the extent of the new land which had risen beneath me, that I could not detect the faintest noise of the surging ocean, strain my ears as I might. Nor were there any sea-fowl to prey upon the dead things.
    For several hours I sat thinking or brooding in the boat, which lay upon its side and afforded a slight shade as the sun moved across the heavens. As the day progressed, the ground lost some of its stickiness, and seemed likely to dry sufficiently for travelling purposes in a short time. That night I slept but little, and the next day I made for myself a pack containing food and water, preparatory to an overland journey in search of the vanished sea and possible rescue.
    On the third morning I found the soil dry enough to walk upon with ease. The odour of the fish was maddening; but I was too much concerned with graver things to mind so slight an evil, and set out boldly for an unknown goal. All day I forged steadily westward, guided by a far-away hummock which rose higher than any other elevation on the rolling desert. That night I encamped, and on the following day still travelled toward the hummock, though that object seemed scarcely nearer than when I had first espied it. By the fourth evening I attained the base of the mound, which turned out to be much higher than it had appeared from a distance; an intervening valley setting it out in sharper relief from the general surface. Too weary to ascend, I slept in the shadow of the hill.
    I know not why my dreams were so wild that night; but ere the waning and fantastically gibbous moon had risen far above the eastern plain, I was awake in a cold perspiration, determined to sleep no more. Such visions as I had experienced were too much for me to endure again. And in the glow of the moon I saw how unwise I had been to travel by day. Without the glare of the parching sun, my journey would have cost me less energy; indeed, I now felt quite able to perform the ascent which had deterred me at sunset. Picking up my pack, I started for the crest of the eminence.
    I have said that the unbroken monotony of the rolling plain was a source of vague horror to me; but I think my horror was greater when I gained the summit of the mound and looked down the other side into an immeasurable pit or canyon, whose black recesses the moon had not yet soared high enough to illumine. I felt myself on the edge of the world; peering over the rim into a fathomless chaos of eternal night. Through my terror ran curious reminiscences of Paradise Lost, and of Satan’s hideous climb through the unfashioned realms of darkness.
    As the moon climbed higher in the sky, I began to see that the slopes of the valley were not quite so perpendicular as I had imagined. Ledges and outcroppings of rock afforded fairly easy foot-holds for a descent, whilst after a drop of a few hundred feet, the declivity became very gradual. Urged on by an impulse which I cannot definitely analyse, I scrambled with difficulty down the rocks and stood on the gentler slope beneath, gazing into the Stygian deeps where no light had yet penetrated.
    All at once my attention was captured by a vast and singular object on the opposite slope, which rose steeply about an hundred yards ahead of me; an object that gleamed whitely in the newly bestowed rays of the ascending moon. That it was merely a gigantic piece of stone, I soon assured myself; but I was conscious of a distinct impression that its contour and position were not altogether the work of Nature. A closer scrutiny filled me with sensations I cannot express; for despite its enormous magnitude, and its position in an abyss which had yawned at the bottom of the sea since the world was young, I perceived beyond a doubt that the strange object was a well-shaped monolith whose massive bulk had known the workmanship and perhaps the worship of living and thinking creatures.
    Dazed and frightened, yet not without a certain thrill of the scientist’s or archaeologist’s delight, I examined my surroundings more closely. The moon, now near the zenith, shone weirdly and vividly above the towering steeps that hemmed in the chasm, and revealed the fact that a far-flung body of water flowed at the bottom, winding out of sight in both directions, and almost lapping my feet as I stood on the slope. Across the chasm, the wavelets washed the base of the Cyclopean monolith; on whose surface I could now trace both inscriptions and crude sculptures. The writing was in a system of hieroglyphics unknown to me, and unlike anything I had ever seen in books; consisting for the most part of conventionalised aquatic symbols such as fishes, eels, octopi, crustaceans, molluscs, whales, and the like. Several characters obviously represented marine things which are unknown to the modern world, but whose decomposing forms I had observed on the ocean-risen plain.
    It was the pictorial carving, however, that did most to hold me spellbound. Plainly visible across the intervening water on account of their enormous size, were an array of bas-reliefs whose subjects would have excited the envy of a Doré. I think that these things were supposed to depict men—at least, a certain sort of men; though the creatures were shewn disporting like fishes in the waters of some marine grotto, or paying homage at some monolithic shrine which appeared to be under the waves as well. Of their faces and forms I dare not speak in detail; for the mere remembrance makes me grow faint. Grotesque beyond the imagination of a Poe or a Bulwer, they were damnably human in general outline despite webbed hands and feet, shockingly wide and flabby lips, glassy, bulging eyes, and other features less pleasant to recall. Curiously enough, they seemed to have been chiselled badly out of proportion with their scenic background; for one of the creatures was shewn in the act of killing a whale represented as but little larger than himself. I remarked, as I say, their grotesqueness and strange size; but in a moment decided that they were merely the imaginary gods of some primitive fishing or seafaring tribe; some tribe whose last descendant had perished eras before the first ancestor of the Piltdown or Neanderthal Man was born. Awestruck at this unexpected glimpse into a past beyond the conception of the most daring anthropologist, I stood musing whilst the moon cast queer reflections on the silent channel before me.
    Then suddenly I saw it. With only a slight churning to mark its rise to the surface, the thing slid into view above the dark waters. Vast, Polyphemus-like, and loathsome, it darted like a stupendous monster of nightmares to the monolith, about which it flung its gigantic scaly arms, the while it bowed its hideous head and gave vent to certain measured sounds. I think I went mad then.
    Of my frantic ascent of the slope and cliff, and of my delirious journey back to the stranded boat, I remember little. I believe I sang a great deal, and laughed oddly when I was unable to sing. I have indistinct recollections of a great storm some time after I reached the boat; at any rate, I know that I heard peals of thunder and other tones which Nature utters only in her wildest moods.
    When I came out of the shadows I was in a San Francisco hospital; brought thither by the captain of the American ship which had picked up my boat in mid-ocean. In my delirium I had said much, but found that my words had been given scant attention. Of any land upheaval in the Pacific, my rescuers knew nothing; nor did I deem it necessary to insist upon a thing which I knew they could not believe. Once I sought out a celebrated ethnologist, and amused him with peculiar questions regarding the ancient Philistine legend of Dagon, the Fish-God; but soon perceiving that he was hopelessly conventional, I did not press my inquiries.
    It is at night, especially when the moon is gibbous and waning, that I see the thing. I tried morphine; but the drug has given only transient surcease, and has drawn me into its clutches as a hopeless slave. So now I am to end it all, having written a full account for the information or the contemptuous amusement of my fellow-men. Often I ask myself if it could not all have been a pure phantasm—a mere freak of fever as I lay sun-stricken and raving in the open boat after my escape from the German man-of-war. This I ask myself, but ever does there come before me a hideously vivid vision in reply. I cannot think of the deep sea without shuddering at the nameless things that may at this very moment be crawling and floundering on its slimy bed, worshipping their ancient stone idols and carving their own detestable likenesses on submarine obelisks of water-soaked granite. I dream of a day when they may rise above the billows to drag down in their reeking talons the remnants of puny, war-exhausted mankind—of a day when the land shall sink, and the dark ocean floor shall ascend amidst universal pandemonium.
    The end is near. I hear a noise at the door, as of some immense slippery body lumbering against it. It shall not find me. God, that hand! The window! The window!`,
    genre: "Horror",
  },
  {
    user: "60c2a7faf125df63803d9cd7",
    title: "The Field Bazaar",
    text: `"I should certainly do it," said Sherlock Holmes.

    I started at the interruption, for my companion had been eating his breakfast with his attention entirely centered upon the paper which was propped up by the coffee pot. Now I looked across at him to find his eyes fastened upon me with the half-amused, half-questioning expression which he usually assumed when he felt he had made an intellectual point.
    
    "Do what?" I asked.
    
    He smiled as he took his slipper from the mantelpiece and drew from it enough shag tobacco to fill the old clay pipe with which he invariably rounded off his breakfast.
    
    "A most characteristic question of yours, Watson," said he. "You will not, I am sure, be offended if I say that any reputation for sharpness which I may possess has been entirely gained by the admirable foil which you have made for me. Have I not heard of debutantes who have insisted upon plainness in their chaperones? There is a certain analogy."
    
    Our long companionship in the Baker Street rooms had left us on those easy terms of intimacy when much may be said without offence. And yet I acknowledged that I was nettled at his remark.
    
    "I may be very obtuse," said I, "but I confess that I am unable to see how you have managed to know that I was... I was..."
    
    "Asked to help in the Edinburgh University Bazaar..."
    
    "Precisely. The letter has only just come to hand, and I have not spoken to you since."
    
    "In spite of that," said Holmes, leaning back in his chair and putting his finger tips together, "I would even venture to suggest that the object of the bazaar is to enlarge the University cricket field."
    
    I looked at him in such bewilderment that he vibrated with silent laughter.
    
    "The fact is, my dear Watson, that you are an excellent subject," said he. "You are never blase. You respond instantly to any external stimulus. Your mental processes may be slow but they are never obscure, and I found during breakfast that you were easier reading than the leader in the Times in front of me."
    
    "I should be glad to know how your arrived at your conclusions," said I.
    
    "I fear that my good nature in giving explanations has seriously compromised my reputation," said Holmes. "But in this case the train of reasoning is based upon such obvious facts that no credit can be claimed for it. You entered the room with a thoughtful expression, the expression of a man who is debating some point in his mind. In your hand you held a solitary letter. Now last night you retired in the best of spirits, so it was clear that it was this letter in your hand which had caused the change in you."
    
    "This is obvious."
    
    "It is all obvious when it is explained to you. I naturally asked myself what the letter could contain which might have this effect upon you. As you walked you held the flap side of the envelope towards me, and I saw upon it the same shield-shaped device which I have observed upon your old college cricket cap. It was clear, then, that the request came from Edinburgh University — or from some club connected with the University. When you reached the table you laid down the letter beside your plate with the address uppermost, and you walked over to look at the framed photograph upon the left of the mantelpiece."
    
    It amazed me to see the accuracy with which he had observed my movements. "What next?" I asked.
    
    "I began by glancing at the address, and I could tell, even at the distance of six feet, that it was an unofficial communication. This I gathered from the use of the word 'Doctor' upon the address, to which, as a Bachelor of Medicine, you have no legal claim. I knew that University officials are pedantic in their correct use of titles, and I was thus enabled to say with certainty that your letter was unofficial. When on your return to the table you turned over your letter and allowed me to perceive that the enclosure was a printed one, the idea of a bazaar first occurred to me. I had already weighed the possibility of its being a political communication, but this seemed improbable in the present stagnant conditions of politics.
    
    "When you returned to the table your face still retained its expression and it was evident that your examination of the photograph had not changed the current of your thoughts. In that case it must itself bear upon the subject in question. I turned my attention to the photograph, therefore, and saw at once that it consisted of yourself as a member of the Edinburgh University Eleven, with the pavillion and cricket field in the background. My small experience of cricket clubs has taught me that next to churches and cavalry ensigns they are the most debt-laden things upon earth. When upon your return to the table I saw you take out your pencil and draw lines upon the envelope, I was convinced that your were endeavoring to realise some projected improvement which was to be brought about by a bazaar. Your face still showed some indecision, so that I was able to break in upon you with my advice that you should assist in so good an object."
    
    I could not help smiling at the extreme simplicity of his explanation.
    
    "Of course, it was as easy as possible," said I.
    
    My remark appeared to nettle him.
    
    "I may add," said he, "that the particular help which you have been asked to give was that you should write in their album, and that you have already made up your mind that the present incident will be the subject of your article."
    
    "But how—!" I cried.
    
    "It is as easy as possible," said he, "and I leave its solution to your own ingenuity. In the meantime," he added, rasing his paper, "you will excuse me if I return to this very interesting article upon the trees of Cremona, and the exact reasons for the pre-eminence in the manufacture of violins. It is one of those small outlying problems to which I am sometimes tempted to direct my attention."`,
    genre: "Thriller/Mystery",
  },
  {
    user: "60c025122524913ea661432c",
    title: "The Damned Thing",
    text: `Chapter 1
    By THE light of a tallow candle, which had been placed on one end of a rough table, a man was reading something written in a book. It was an old account book, greatly worn; and the writing was not, apparently, very legible, for the man sometimes held the page close to the flame of the candle to get a stronger light upon it. The shadow of the book would then throw into obscurity a half of the room, darkening a number of faces and figures; for besides the reader, eight other men were present. Seven of them sat against the rough log walls, silent and motionless, and, the room being small, not very far from the table. By extending an arm any one of them could have touched the eighth man, who lay on the table, face upward, partly covered by a sheet, his arms at his sides. He was dead.

    The man with the book was not reading aloud, and no one spoke; all seemed to be waiting for something to occur; the dead man only was without expectation. From the blank darkness outside came in, through the aperture that served for a window, all the ever unfamiliar noises of night in the wilderness—the long, nameless note of a distant coyote; the stilly pulsing thrill of tireless insects in trees; strange cries of night birds, so different from those of the birds of day; the drone of great blundering beetles, and all that mysterious chorus of small sounds that seem always to have been but half heard when they have suddenly ceased, as if conscious of an indiscretion. But nothing of all this was noted in that company; its members were not overmuch addicted to idle interest in matters of no practical importance; that was obvious in every line of their rugged faces—obvious even in the dim light of the single candle. They were evidently men of the vicinity—farmers and woodmen.
    
    The person reading was a trifle different; one would have said of him that he was of the world, worldly, albeit there was that in his attire which attested a certain fellowship with the organisms of his environment. His coat would hardly have passed muster in San Francisco: his footgear was not of urban origin, and the hat that lay by him on the floor (he was the only one uncovered) was such that if one had considered it as an article of mere personal adornment he would have missed its meaning. In countenance the man was rather prepossessing, with just a hint of sternness; though that he may have assumed or cultivated, as appropriate to one in authority. For he was a coroner. It was by virtue of his office that he had possession of the book in which he was reading; it had been found among the dead man's effects—in his cabin, where the inquest was now taking place.
    
    When the coroner had finished reading he put the book into his breast pocket. At that moment the door was pushed open and a young man entered. He, clearly, was not of mountain birth and breeding: he was clad as those who dwell in cities. His clothing was dusty, however, as from travel. He had, in fact, been riding hard to attend the inquest.
    
    The coroner nodded; no one else greeted him.
    
    "We have waited for you," said the coroner. "It is necessary to have done with this business to-night."
    
    The young man smiled. "I am sorry to have kept you," he said. "I went away, not to evade your summons, but to post to my newspaper an account of what I suppose I am called back to relate."
    
    The coroner smiled.
    
    "The account that you posted to your newspaper," he said, "differs probably from that which you will give here under oath."
    
    "That," replied the other, rather hotly and with a visible flush, "is as you choose. I used manifold paper and have a copy of what I sent. It was not written as news, for it is incredible, but as fiction. It may go as a part of my testimony under oath."
    
    "But you say it is incredible."
    
    "That is nothing to you, sir, if I also swear that it is true."
    
    The coroner was apparently not greatly affected by the young man's manifest resentment. He was silent for some moments, his eyes upon the floor. The men about the sides of the cabin talked in whispers, but seldom withdrew their gaze from the face of the corpse. Presently the coroner lifted his eyes and said: "We will resume the inquest."
    
    The men removed their hats. The witness was sworn.
    
    "What is your name?" the coroner asked.
    
    "William Harker."
    
    "Age?"
    
    "Twenty-seven."
    
    "You knew the deceased, Hugh Morgan?"
    
    "Yes."
    
    "You were with him when he died?"
    
    "Near him."
    
    "How did that happen—your presence, I mean?"
    
    "I was visiting him at this place to shoot and fish. A part of my purpose, however, was to study him, and his odd, solitary way of life. He seemed a good model for a character in fiction. I sometimes write stories."
    
    "I sometimes read them."
    
    "Thank you."
    
    "Stories in general—not yours."
    
    Some of the jurors laughed. Against a sombre background humor shows high lights. Soldiers in the intervals of battle laugh easily, and a jest in the death chamber conquers by surprise.
    
    "Relate the circumstances of this man's death," said the coroner. "You may use any notes or memoranda that you please."
    
    The witness understood. Pulling a manuscript from his breast pocket he held it near the candle, and turning the leaves until he found the passage that he wanted, began to read.
    
    Chapter 2
    
    "...The sun had hardly risen when we left the house. We were looking for quail, each with a shotgun, but we had only one dog. Morgan said that our best ground was beyond a certain ridge that he pointed out, and we crossed it by a trail through the chaparral. On the other side was comparatively level ground, thickly covered with wild oats. As we emerged from the chaparral, Morgan was but a few yards in advance. Suddenly, we heard, at a little distance to our right, and partly in front, a noise as of some animal thrashing about in the bushes, which we could see were violently agitated.

"'We've started a deer,' said. 'I wish we had brought a rifle.'

"Morgan, who had stopped and was intently watching the agitated chaparral, said nothing, but had cocked both barrels of his gun, and was holding it in readiness to aim. I thought him a trifle excited, which surprised me, for he had a reputation for exceptional coolness, even in moments of sudden and imminent peril.

"'O, come!' I said. 'You are not going to fill up a deer with quail-shot, are you?'

"Still he did not reply; but, catching a sight of his face as he turned it slightly toward me, I was struck by the pallor of it. Then I understood that we had serious business on hand, and my first conjecture was that we had 'jumped' a grizzly. I advanced to Morgan's side, cocking my piece as I moved.

"The bushes were now quiet, and the sounds had ceased, but Morgan was as attentive to the place as before.

"'What is it? What the devil is it?' I asked.

"'That Damned Thing!' he replied, without turning his head. His voice was husky and unnatural. He trembled visibly.

"I was about to speak further, when I observed the wild oats near the place of the disturbance moving in the most inexplicable way. I can hardly describe it. It seemed as if stirred by a streak of wind, which not only bent it, but pressed it down—crushed it so that it did not rise, and this movement was slowly prolonging itself directly toward us.

"Nothing that I had ever seen had affected me so strangely as this unfamiliar and unaccountable phenomenon, yet I am unable to recall any sense of fear. I remember—and tell it here because, singularly enough, I recollected it then—that once, in looking carelessly out of an open window, I momentarily mistook a small tree close at hand for one of a group of larger trees at a little distance away. It looked the same size as the others, but, being more distinctly and sharply defined in mass and detail, seemed out of harmony with them. It was a mere falsification of the law of aerial perspective, but it startled, almost terrified me. We so rely upon the orderly operation of familiar natural laws that any seeming suspension of them is noted as a menace to our safety, a warning of unthinkable calamity. So now the apparently causeless movement of the herbage, and the slow, undeviating approach of the line of disturbance were distinctly disquieting. My companion appeared actually frightened, and I could hardly credit my senses when I saw him suddenly throw his gun to his shoulders and fire both barrels at the agitated grass! Before the smoke of the discharge had cleared away I heard a loud savage cry—a scream like that of a wild animal—and, flinging his gun upon the ground, Morgan sprang away and ran swiftly from the spot. At the same instant I was thrown violently to the ground by the impact of something unseen in the smoke—some soft, heavy substance that seemed thrown against me with great force.

"Before I could get upon my feet and recover my gun, which seemed to have been struck from my hands, I heard Morgan crying out as if in mortal agony, and mingling with his cries were such hoarse savage sounds as one hears from fighting dogs. Inexpressibly terrified, I struggled to my feet and looked in the direction of Morgan's retreat; and may heaven in mercy spare me from another sight like that! At a distance of less than thirty yards was my friend, down upon one knee, his head thrown back at a frightful angle, hatless, his long hair in disorder and his whole body in violent movement from side to side, backward and forward. His right arm was lifted and seemed to lack the hand—at least, I could see none. The other arm was invisible. At times, as my memory now reports this extraordinary scene, I could discern but a part of his body; it was as if he had been partly blotted out—I can not otherwise express it—then a shifting of his position would bring it all into view again.

"All this must have occurred within a few seconds, yet in that time Morgan assumed all the postures of a determined wrestler vanquished by superior weight and strength. I saw nothing but him, and him not always distinctly. During the entire incident his shouts and curses were heard, as if through an enveloping uproar of such sounds of rage and fury as I had never heard from the throat of man or brute!

"For a moment only I stood irresolute, then, throwing down my gun, I ran forward to my friend's assistance. I had a vague belief that he was suffering from a fit or some form of convulsion. Before I could reach his side he was down and quiet. All sounds had ceased, but, with a feeling of such terror as even these awful events had not inspired, I now saw the same mysterious movement of the wild oats prolonging itself from the trampled area about the prostrate man toward the edge of a wood. It was only when it had reached the wood that I was able to withdraw my eyes and look at my companion. He was dead."

Chapter 3

The coroner rose from his seat and stood beside the dead man. Lifting an edge of the sheet he pulled it away, exposing the entire body, altogether naked and showing in the candle light a clay-like yellow. It had, however, broad maculations of bluish-black, obviously caused by extravasated blood from contusions. The chest and sides looked as if they had been beaten with a bludgeon. There were dreadful lacerations; the skin was torn in strips and shreds.

The coroner moved round to the end of the table and undid a silk handkerchief, which had been passed under the chin and knotted on the top of the head. When the handkerchief was drawn away it exposed what had been the throat. Some of the jurors who had risen to get a better view repented their curiosity, and turned away their faces. Witness Harker went to the open window and leaned out across the sill, faint and sick. Dropping the handkerchief upon the dead man's neck, the coroner stepped to an angle of the room, and from a pile of clothing produced one garment after another, each of which he held up a moment for inspection. All were torn, and stiff with blood. The jurors did not make a closer inspection. They seemed rather uninterested. They had, in truth, seen all this before; the only thing that was new to them being Harker's testimony.

"Gentlemen," the coroner said, "we have no more evidence, I think. Your duty has been already explained to you; if there is nothing you wish to ask you may go outside and consider your verdict."

The foreman rose—a tall, bearded man of sixty, coarsely clad.

"I should like to ask one question, Mr. Coroner," he said. "What asylum did this yer last witness escape from?"

"Mr. Harker," said the coroner, gravely and tranquilly, "from what asylum did you last escape?"

Harker flushed crimson again, but said nothing, and the seven jurors rose and solemnly filed out of the cabin.

"If you have done insulting me, sir," said Harker, as soon as he and the officer were left alone with the dead man, "I suppose I am at liberty to go?"

"Yes."

Harker started to leave, but paused, with his hand on the door latch. The habit of his profession was strong in him—stronger than his sense of personal dignity. He turned about and said:

"The book that you have there—I recognize it as Morgan's diary. You seemed greatly interested in it; you read in it while I was testifying. May I see it? The public would like—"

"The book will cut no figure in this matter," replied the official, slipping it into his coat pocket; "all the entries in it were made before the writer's death."

As Harker passed out of the house the jury reentered and stood about the table on which the now covered corpse showed under the sheet with sharp definition. The foreman seated himself near the candle, produced from his breast pocket a pencil and scrap of paper, and wrote rather laboriously the following verdict, which with various degrees of effort all signed:

"We, the jury, do find that the remains come to their death at the hands of a mountain lion, but some of us thinks, all the same, they had fits."

Chapter 4

In the diary of the late Hugh Morgan are certain interesting entries having, possibly, a scientific value as suggestions. At the inquest upon his body the book was not put in evidence; possibly the coroner thought it not worth while to confuse the jury. The date of the first of the entries mentioned can not be ascertained; the upper part of the leaf is torn away; the part of the entry remaining is as follows:

"... would run in a half circle, keeping his head turned always toward the centre and again he would stand still, barking furiously. At last he ran away into the brush as fast as he could go. I thought at first that he had gone mad, but on returning to the house found no other alteration in his manner than what was obviously due to fear of punishment.

"Can a dog see with his nose? Do odors impress some olfactory centre with images of the thing emitting them? . . .

"Sept 2.—Looking at the stars last night as they rose above the crest of the ridge east of the house, I observed them successively disappear—from left to right. Each was eclipsed but an instant, and only a few at the same time, but along the entire length of the ridge all that were within a degree or two of the crest were blotted out. It was as if something had passed along between me and them; but I could not see it, and the stars were not thick enough to define its outline. Ugh! I don't like this. . . ."

Several weeks' entries are missing, three leaves being torn from the book.

"Sept. 27.—It has been about here again—I find evidences of its presence every day. I watched again all of last night in the same cover, gun in hand, double-charged with buckshot. In the morning the fresh footprints were there, as before. Yet I would have sworn that I did not sleep—indeed, I hardly sleep at all. It is terrible, insupportable! If these amazing experiences are real I shall go mad; if they are fanciful I am mad already.

"Oct. 3.—I shall not go—it shall not drive me away. No, this is my house, my land. God hates a coward....

"Oct. 5.—I can stand it no longer; I have invited Harker to pass a few weeks with me—he has a level head. I can judge from his manner if he thinks me mad.

"Oct. 7.—I have the solution of the problem; it came to me last night—suddenly, as by revelation. How simple—how terribly simple!

"There are sounds that we can not hear. At either end of the scale are notes that stir no chord of that imperfect instrument, the human ear. They are too high or too grave. I have observed a flock of blackbirds occupying an entire treetop—the tops of several trees—and all in full song. Suddenly—in a moment—at absolutely the same instant—all spring into the air and fly away. How? They could not all see one another—whole treetops intervened. At no point could a leader have been visible to all. There must have been a signal of warning or command, high and shrill above the din, but by me unheard. I have observed, too, the same simultaneous flight when all were silent, among not only blackbirds, but other birds—quail, for example, widely separated by bushes—even on opposite sides of a hill.

"It is known to seamen that a school of whales basking or sporting on the surface of the ocean, miles apart, with the convexity of the earth between them, will sometimes dive at the same instant—all gone out of sight in a moment. The signal has been sounded—too grave for the ear of the sailor at the masthead and his comrades on the deck—who nevertheless feel its vibrations in the ship as the stones of a cathedral are stirred by the bass of the organ.

"As with sounds, so with colors. At each end of the solar spectrum the chemist can detect the presence of what are known as 'actinic' rays. They represent colors—integral colors in the composition of light—which we are unable to discern. The human eye is an imperfect instrument; its range is but a few octaves of the real 'chromatic scale' I am not mad; there are colors that we can not see.

"And, God help me! the Damned Thing is of such a color!"`,
    genre: "Horror",
  },
  {
    user: "60c025122524913ea661432c",
    title: "A Dream of Armageddon",
    text: `The man with the white face entered the carriage at Rugby. He moved slowly in spite of the urgency of his porter, and even while he was still on the platform I noted how ill he seemed. He dropped into the corner over against me with a sigh, made an incomplete attempt to arrange his travelling shawl, and became motionless, with his eyes staring vacantly. Presently he was moved by a sense of my observation, looked up at me, and put out a spiritless hand for his newspaper. Then he glanced again in my direction.

    I feigned to read. I feared I had unwittingly embarrassed him, and in a moment I was surprised to find him speaking.
    
    "I beg your pardon?" said I.
    
    "That book," he repeated, pointing a lean finger, "is about dreams."
    
    "Obviously," I answered, for it was Fortnum Roscoe's Dream States, and the title was on the cover.
    
    He hung silent for a space as if he sought words. "Yes," he said at last, "but they tell you nothing."
    
    I did not catch his meaning for a second.
    
    "They don't know," he added.
    
    I looked a little more attentively at his face.
    
    "There are dreams," he said, "and dreams."
    
    That sort of proposition I never dispute.
    
    "I suppose--" he hesitated. "Do you ever dream? I mean vividly."
    
    "I dream very little," I answered. "I doubt if I have three vivid dreams in a year."
    
    "Ah!" he said, and seemed for a moment to collect his thoughts.
    
    "Your dreams don't mix with your memories?" he asked abruptly.
    
    "You don't find yourself in doubt; did this happen or did it not?"
    
    "Hardly ever. Except just for a momentary hesitation now and then. I suppose few people do."
    
    "Does he say--?" He indicated the book.
    
    "Says it happens at times and gives the usual explanation about intensity of impression and the like to account for its not happening as a rule. I suppose you know something of these theories--"
    
    "Very little--except that they are wrong."
    
    His emaciated hand played with the strap of the window for a time. I prepared to resume reading, and that seemed to precipitate his next remark. He leant forward almost as though he would touch me.
    
    "Isn't there something called consecutive dreaming--that goes on night after night?"
    
    "I believe there is. There are cases given in most books on mental trouble."
    
    "Mental trouble! Yes. I daresay there are. It's the right place for them. But what I mean--" He looked at his bony knuckles. "Is that sort of thing always dreaming? Is it dreaming?
    
    Or is it something else? Mightn't it be something else?"
    
    I should have snubbed his persistent conversation but for the drawn anxiety of his face. I remember now the look of his faded eyes and the lids red stained--perhaps you know that look.
    
    "I'm not just arguing about a matter of opinion," he said. "The thing's killing me."
    
    "Dreams?"
    
    "If you call them dreams. Night after night. Vivid!--so vivid . . . . this--" (he indicated the landscape that went streaming by the window) "seems unreal in comparison! I can scarcely remember who I am, what business I am on . . . ."
    
    He paused. "Even now--"
    
    "The dream is always the same--do you mean?" I asked.
    
    "It's over."
    
    "You mean?"
    
    "I died."
    
    "Died?"
    
    "Smashed and killed, and now, so much of me as that dream was, is dead. Dead forever. I dreamt I was another man, you know, living in a different part of the world and in a different time. I dreamt that night after night. Night after night I woke into that other life. Fresh scenes and fresh happenings--until I came upon the last--"
    
    "When you died?"
    
    "When I died."
    
    "And since then--"
    
    "No," he said. "Thank God! That was the end of the dream . . . "
    
    It was clear I was in for this dream. And after all, I had an hour before me, the light was fading fast, and Fortnum Roscoe has a dreary way with him. "Living in a different time," I said: "do you mean in some different age?"
    
    "Yes."
    
    "Past?"
    
    "No, to come--to come."
    
    "The year three thousand, for example?"
    
    "I don't know what year it was. I did when I was asleep, when I was dreaming, that is, but not now--not now that I am awake. There's a lot of things I have forgotten since I woke out of these dreams, though I knew them at the time when I was--I suppose it was dreaming. They called the year differently from our way of calling the year . . . What did they call it?" He put his hand to his forehead. "No," said he, "I forget."
    
    He sat smiling weakly. For a moment I feared he did not mean to tell me his dream. As a rule I hate people who tell their dreams, but this struck me differently. I proffered assistance even. "It began--" I suggested.
    
    "It was vivid from the first. I seemed to wake up in it suddenly. And it's curious that in these dreams I am speaking of I never remembered this life I am living now. It seemed as if the dream life was enough while it lasted. Perhaps--But I will tell you how I find myself when I do my best to recall it all. I don't remember anything clearly until I found myself sitting in a sort of loggia looking out over the sea. I had been dozing, and suddenly I woke up--fresh and vivid--not a bit dreamlike--because the girl had stopped fanning me."
    
    "The girl?"
    
    "Yes, the girl. You must not interrupt or you will put me out."
    
    He stopped abruptly. "You won't think I'm mad?" he said.
    
    "No," I answered. "You've been dreaming. Tell me your dream."
    
    "I woke up, I say, because the girl had stopped fanning me. I was not surprised to find myself there or anything of that sort, you understand. I did not feel I had fallen into it suddenly. I simply took it up at that point. Whatever memory I had of this life, this nineteenth-century life, faded as I woke, vanished like a dream. I knew all about myself, knew that my name was no longer Cooper but Hedon, and all about my position in the world. I've forgotten a lot since I woke--there's a want of connection--but it was all quite clear and matter of fact then."
    
    He hesitated again, gripping the window strap, putting his face forward and looking up to me appealingly.
    
    "This seems bosh to you?"
    
    "No, no!" I cried. "Go on. Tell me what this loggia was like!"
    
    "It was not really a loggia--I don't know what to call it. It faced south. It was small. It was all in shadow except the semicircle above the balcony that showed the sky and sea and the corner where the girl stood. I was on a couch--it was a metal couch with light striped cushions--and the girl was leaning over the balcony with her back to me. The light of the sunrise fell on her ear and cheek. Her pretty white neck and the little curls that nestled there, and her white shoulder were in the sun, and all the grace of her body was in the cool blue shadow. She was dressed --how can I describe it? It was easy and flowing. And altogether there she stood, so that it came to me how beautiful and desirable she was, as though I had never seen her before. And when at last I sighed and raised myself upon my arm she turned her face to me--"
    
    He stopped.
    
    "I have lived three-and-fifty years in this world. I have had mother, sisters, friends, wife and daughters--all their faces, the play of their faces, I know. But the face of this girl--it is much more real to me. I can bring it back into memory so that I see it again--I could draw it or paint it. And after all--"
    
    He stopped--but I said nothing.
    
    "The face of a dream--the face of a dream. She was beautiful.
    
    Not that beauty which is terrible, cold, and worshipful, like the beauty of a saint; nor that beauty that stirs fierce passions; but a sort of radiation, sweet lips that softened into smiles, and grave gray eyes. And she moved gracefully, she seemed to have part with all pleasant and gracious things--"
    
    He stopped, and his face was downcast and hidden. Then he looked up at me and went on, making no further attempt to disguise his absolute belief in the reality of his story.
    
    "You see, I had thrown up my plans and ambitions, thrown up all I had ever worked for or desired for her sake. I had been a master man away there in the north, with influence and property and a great reputation, but none of it had seemed worth having beside her. I had come to the place, this city of sunny pleasures with her, and left all those things to wreck and ruin just to save a remnant at least of my life. While I had been in love with her before I knew that she had any care for me, before I had imagined that she would dare--that we should dare, all my life had seemed vain and hollow, dust and ashes. It was dust and ashes. Night after night and through the long days I had longed and desired--my soul had beaten against the thing forbidden!
    
    "But it is impossible for one man to tell another just these things. It's emotion, it's a tint, a light that comes and goes. Only while it's there, everything changes, everything. The thing is I came away and left them in their Crisis to do what they could."
    
    "Left whom?" I asked, puzzled.
    
    "The people up in the north there. You see--in this dream, anyhow--I had been a big man, the sort of man men come to trust in, to group themselves about. Millions of men who had never seen me were ready to do things and risk things because of their confidence in me. I had been playing that game for years, that big laborious game, that vague, monstrous political game amidst intrigues and betrayals, speech and agitation. It was a vast weltering world, and at last I had a sort of leadership against the Gang--you know it was called the Gang--a sort of compromise of scoundrelly projects and base ambitions and vast public emotional stupidities and catch-words--the Gang that kept the world noisy and blind year by year, and all the while that it was drifting, drifting towards infinite disaster. But I can't expect you to understand the shades and complications of the year--the year something or other ahead. I had it all--down to the smallest details--in my dream. I suppose I had been dreaming of it before I awoke, and the fading outline of some queer new development I had imagined still hung about me as I rubbed my eyes. It was some grubby affair that made me thank God for the sunlight. I sat up on the couch and remained looking at the woman and rejoicing--rejoicing that I had come away out of all that tumult and folly and violence before it was too late. After all, I thought, this is life--love and beauty, desire and delight, are they not worth all those dismal struggles for vague, gigantic ends? And I blamed myself for having ever sought to be a leader when I might have given my days to love. But then, thought I, if I had not spent my early days sternly and austerely, I might have wasted myself upon vain and worthless women, and at the thought all my being went out in love and tenderness to my dear mistress, my dear lady, who had come at last and compelled me--compelled me by her invincible charm for me--to lay that life aside.
    
    "'You are worth it,' I said, speaking without intending her to hear; 'you are worth it, my dearest one; worth pride and praise and all things. Love! to have you is worth them all together." And at the murmur of my voice she turned about.
    
    "'Come and see,' she cried--I can hear her now--'come and see the sunrise upon Monte Solaro.'
    
    "I remember how I sprang to my feet and joined her at the balcony. She put a white hand upon my shoulder and pointed towards great masses of limestone, flushing, as it were, into life. I looked. But first I noted the sunlight on her face caressing the lines of her cheeks and neck. How can I describe to you the scene we had before us? We were at Capri--"
    
    "I have been there," I said. "I have clambered up Monte Solaro and drunk vero Capri--muddy stuff like cider--at the summit."
    
    "Ah!" said the man with the white face; "then perhaps you can tell me--you will know if this is indeed Capri. For in this life I have never been there. Let me describe it. We were in a little room, one of a vast multitude of little rooms, very cool and sunny, hollowed out of the limestone of a sort of cape, very high above the sea. The whole island, you know, was one enormous hotel, complex beyond explaining, and on the other side there were miles of floating hotels, and huge floating stages to which the flying machines came. They called it a pleasure city. Of course, there was none of that in your time--rather, I should say, is none of that now. Of course. Now!--yes.
    
    "Well, this room of ours was at the extremity of the cape, so that one could see east and west. Eastward was a great cliff--a thousand feet high perhaps--coldly gray except for one bright edge of gold, and beyond it the Isle of the Sirens, and a falling coast that faded and passed into the hot sunrise. And when one turned to the west, distinct and near was a little bay, a little beach still in shadow. And out of that shadow rose Solaro straight and tall, flushed and golden crested, like a beauty throned, and the white moon was floating behind her in the sky. And before us from east to west stretched the many-tinted sea all dotted with little sailing boats.
    
    "To the eastward, of course, these little boats were gray and very minute and clear, but to the westward they were little boats of gold--shining gold--almost like little flames. And just below us was a rock with an arch worn through it. The blue sea-water broke to green and foam all round the rock, and a galley came gliding out of the arch."
    
    "I know that rock." I said. "I was nearly drowned there. It is called the Faraglioni."
    
    "I Faraglioni? Yes, she called it that," answered the man with the white face. "There was some story--but that--"
    
    He put his hand to his forehead again. " No," he said, "I forget that story."
    
    "Well, that is the first thing I remember, the first dream I had, that little shaded room and the beautiful air and sky and that dear lady of mine, with her shining arms and her graceful robe, and how we sat and talked in half whispers to one another. We talked in whispers not because there was any one to hear, but because there was still such a freshness of mind between us that our thoughts were a little frightened, I think, to find themselves at last in words. And so they went softly.
    
    "Presently we were hungry and we went from our apartment, going by a strange passage with a moving floor, until we came to the great breakfast room--there was a fountain and music. A pleasant and joyful place it was, with its sunlight and splashing, and the murmur of plucked strings. And we sat and ate and smiled at one another, and I would not heed a man who was watching me from a table near by.
    
    "And afterwards we went on to the dancing-hall. But I cannot describe that hall. The place was enormous--larger than any building you have ever seen--and in one place there was the old gate of Capri, caught into the wall of a gallery high overhead. Light girders, stems and threads of gold, burst from the pillars like fountains, streamed like an Aurora across the roof and interlaced, like--like conjuring tricks. All about the great circle for the dancers there were beautiful figures, strange dragons, and intricate and wonderful grotesques bearing lights. The place was inundated with artificial light that shamed the newborn day. And as we went through the throng the people turned about and looked at us, for all through the world my name and face were known, and how I had suddenly thrown up pride and struggle to come to this place. And they looked also at the lady beside me, though half the story of how at last she had come to me was unknown or mistold. And few of the men who were there, I know, but judged me a happy man, in spite of all the shame and dishonour that had come upon my name.
    
    "The air was full of music, full of harmonious scents, full of the rhythm of beautiful motions. Thousands of beautiful people swarmed about the hall, crowded the galleries, sat in a myriad recesses; they were dressed in splendid colours and crowned with flowers; thousands danced about the great circle beneath the white images of the ancient gods, and glorious processions of youths and maidens came and went. We two danced, not the dreary monotonies of your days--of this time, I mean--but dances that were beautiful, intoxicating. And even now I can see my lady dancing--dancing joyously. She danced, you know, with a serious face; she danced with a serious dignity, and yet she was smiling at me and caressing me--smiling and caressing with her eyes.
    
    "The music was different," he murmured. "It went--I cannot describe it; but it was infinitely richer and more varied than any music that has ever come to me awake.
    
    "And then--it was when we had done dancing--a man came to speak to me. He was a lean, resolute man, very soberly clad for that place, and already I had marked his face watching me in the breakfasting hall, and afterwards as we went along the passage I had avoided his eye. But now, as we sat in a little alcove, smiling at the pleasure of all the people who went to and fro across the shining floor, he came and touched me, and spoke to me so that I was forced to listen. And he asked that he might speak to me for a little time apart.
    
    "'No,' I said. 'I have no secrets from this lady. What do you want to tell me?'
    
    "He said it was a trivial matter, or at least a dry matter, for a lady to hear.
    
    "'Perhaps for me to hear,' said I.
    
    "He glanced at her, as though almost he would appeal to her. Then he asked me suddenly if I had heard of a great and avenging declaration that Evesham had made? Now, Evesham had always before been the man next to myself in the leadership of that great party in the north. He was a forcible, hard, and tactless man, and only I had been able to control and soften him. It was on his account even more than my own, I think, that the others had been so dismayed at my retreat. So this question about what he had done reawakened my old interest in the life I had put aside just for a moment.
    
    "'I have taken no heed of any news for many days,' I said. 'What has Evesham been saying?'
    
    "And with that the man began, nothing loth, and I must confess even I was struck by Evesham's reckless folly in the wild and threatening words he had used. And this messenger they had sent to me not only told me of Evesham's speech, but went on to ask counsel and to point out what need they had of me. While he talked, my lady sat a little forward and watched his face and mine.
    
    "My old habits of scheming and organising reasserted themselves. I could even see myself suddenly returning to the north, and all the dramatic effect of it. All that this man said witnessed to the disorder of the party indeed, but not to its damage. I should go back stronger than I had come. And then I thought of my lady. You see--how can I tell you? There were certain peculiarities of our relationship--as things are I need not tell you about that--which would render her presence with me impossible. I should have had to leave her; indeed, I should have had to renounce her clearly and openly, if I was to do all that I could do in the north. And the man knew that, even as he talked to her and me, knew it as well as she did, that my steps to duty were--first, separation, then abandonment. At the touch of that thought my dream of a return was shattered. I turned on the man suddenly, as he was imagining his eloquence was gaining ground with me.
    
    "'What have I to do with these things now?' I said. 'I have done with them. Do you think I am coquetting with your people in coming here?'
    
    "'No,' he said. 'But--'
    
    "'Why cannot you leave me alone. I have done with these things. I have ceased to be anything but a private man.'
    
    "'Yes,' he answered. 'But have you thought?--this talk of war, these reckless challenges, these wild aggressions--'
    
    "I stood up.
    
    "'No,' I cried. 'I won't hear you. I took count of all those things, I weighed them--and I have come away.'
    
    "He seemed to consider the possibility of persistence. He looked from me to where the lady sat regarding us.
    
    "'War,' he said, as if he were speaking to himself, and then turned slowly from me and walked away.
    
    "I stood, caught in the whirl of thoughts his appeal had set going.
    
    "I heard my lady's voice.
    
    "'Dear,' she said; 'but if they had need of you--'
    
    "She did not finish her sentence, she let it rest there. I turned to her sweet face, and the balance of my mood swayed and reeled.
    
    "'They want me only to do the thing they dare not do themselves,' I said. 'If they distrust Evesham they must settle with him themselves.'
    
    "She looked at me doubtfully.
    
    "'But war--' she said.
    
    "I saw a doubt on her face that I had seen before, a doubt of herself and me, the first shadow of the discovery that, seen strongly and completely, must drive us apart for ever.
    
    "Now, I was an older mind than hers, and I could sway her to this belief or that.
    
    "'My dear one,' I said, 'you must not trouble over these things. There will be no war. Certainly there will be no war. The age of wars is past. Trust me to know the justice of this case. They have no right upon me, dearest, and no one has a right upon me. I have been free to choose my life, and I have chosen this.'
    
    "'But war--,' she said.
    
    "I sat down beside her. I put an arm behind her and took her hand in mine. I set myself to drive that doubt away--I set myself to fill her mind with pleasant things again. I lied to her, and in lying to her I lied also to myself. And she was only too ready to believe me, only too ready to forget.
    
    "Very soon the shadow had gone again, and we were hastening to our bathing-place in the Grotta del Bovo Marino, where it was our custom to bathe every day. We swam and splashed one another, and in that buoyant water I seemed to become something lighter and stronger than a man. And at last we came out dripping and rejoicing and raced among the rocks. And then I put on a dry bathing-dress, and we sat to bask in the sun, and presently I nodded, resting my head against her knee, and she put her hand upon my hair and stroked it softly and I dozed. And behold! as it were with the snapping of the string of a violin, I was awakening, and I was in my own bed in Liverpool, in the life of to-day.
    
    "Only for a time I could not believe that all these vivid moments had been no more than the substance of a dream.
    
    "In truth, I could not believe it a dream for all the sobering reality of things about me. I bathed and dressed as it were by habit, and as I shaved I argued why I of all men should leave the woman I loved to go back to fantastic politics in the hard and strenuous north. Even if Evesham did force the world back to war, what was that to me? I was a man with the heart of a man, and why should I feel the responsibility of a deity for the way the world might go?
    
    "You know that is not quite the way I think about affairs, about my real affairs. I am a solicitor, you know, with a point of view.
    
    "The vision was so real, you must understand, so utterly unlike a dream that I kept perpetually recalling little irrelevant details; even the ornament of the book-cover that lay on my wife's sewing-machine in the breakfast-room recalled with the utmost vividness the gilt line that ran about the seat in the alcove where I had talked with the messenger from my deserted party. Have you ever heard of a dream that had a quality like that?"
    
    "Like--?"
    
    "So that afterwards you remembered little details you had forgotten."
    
    I thought. I had never noticed the point before, but he was right.
    
    "Never," I said. "That is what you never seem to do with dreams."
    
    "No," he answered. "But that is just what I did. I am a solicitor, you must understand, in Liverpool, and I could not help wondering what the clients and business people I found myself talking to in my office would think if I told them suddenly I was in love with a girl who would be born a couple of hundred years or so hence, and worried about the politics of my great-great-great- grandchildren. I was chiefly busy that day negotiating a ninety-nine-year building lease. It was a private builder in a hurry, and we wanted to tie him in every possible way. I had an interview with him, and he showed a certain want of temper that sent me to bed still irritated. That night I had no dream. Nor did I dream the next night, at least, to remember.
    
    "Something of that intense reality of conviction vanished. I began to feel sure it was a dream. And then it came again.
    
    "When the dream came again, nearly four days later, it was very different. I think it certain that four days had also elapsed in the dream. Many things had happened in the north, and the shadow of them was back again between us, and this time it was not so easily dispelled. I began I know with moody musings. Why, in spite of all, should I go back, go back for all the rest of my days to toil and stress, insults and perpetual dissatisfaction, simply to save hundreds of millions of common people, whom I did not love, whom too often I could do no other than despise, from the stress and anguish of war and infinite misrule? And after all I might fail. They all sought their own narrow ends, and why should not I--why should not I also live as a man? And out of such thoughts her voice summoned me, and I lifted my eyes.
    
    I found myself awake and walking. We had come out above the Pleasure City, we were near the summit of Monte Solaro and looking towards the bay. It was the late afternoon and very clear. Far away to the left Ischia hung in a golden haze between sea and sky, and Naples was coldly white against the hills, and before us was Vesuvius with a tall and slender streamer feathering at last towards the south, and the ruins of Torre dell' Annunziata and Castellammare glittering and near."
    
    I interrupted suddenly: "You have been to Capri, of course?"
    
    "Only in this dream," he said, "only in this dream. All across the bay beyond Sorrento were the floating palaces of the Pleasure City moored and chained. And northward were the broad floating stages that received the aeroplanes. Aeroplanes fell out of the sky every afternoon, each bringing its thousands of pleasure-seekers from the uttermost parts of the earth to Capri and its delights. All these things, I say, stretched below.
    
    "But we noticed them only incidentally because of an unusual sight that evening had to show. Five war aeroplanes that had long slumbered useless in the distant arsenals of the Rhinemouth were manoeuvring now in the eastward sky. Evesham had astonished the world by producing them and others, and sending them to circle here and there. It was the threat material in the great game of bluff he was playing, and it had taken even me by surprise. He was one of those incredibly stupid energetic people who seem sent by heaven to create disasters. His energy to the first glance seemed so wonderfully like capacity! But he had no imagination, no invention, only a stupid, vast, driving force of will, and a mad faith in his stupid idiot 'luck' to pull him through. I remember how we stood upon the headland watching the squadron circling far away, and how I weighed the full meaning of the sight, seeing clearly the way things must go. And then even it was not too late.
    
    I might have gone back, I think, and saved the world. The people of the north would follow me, I knew, granted only that in one thing I respected their moral standards. The east and south would trust me as they would trust no other northern man. And I knew I had only to put it to her and she would have let me go . . . . Not because she did not love me!
    
    "Only I did not want to go; my will was all the other way about. I had so newly thrown off the incubus of responsibility: I was still so fresh a renegade from duty that the daylight clearness of what I ought to do had no power at all to touch my will. My will was to live, to gather pleasures and make my dear lady happy. But though this sense of vast neglected duties had no power to draw me, it could make me silent and preoccupied, it robbed the days I had spent of half their brightness and roused me into dark meditations in the silence of the night. And as I stood and watched Evesham's aeroplanes sweep to and fro--those birds of infinite ill omen--she stood beside me watching me, perceiving the trouble indeed, but not perceiving it clearly--her eyes questioning my face, her expression shaded with perplexity. Her face was gray because the sunset was fading out of the sky. It was no fault of hers that she held me. She had asked me to go from her, and again in the night time and with tears she had asked me to go.
    
    "At last it was the sense of her that roused me from my mood. I turned upon her suddenly and challenged her to race down the mountain slopes. 'No,' she said, as if I had jarred with her gravity, but I was resolved to end that gravity, and make her run--no one can be very gray and sad who is out of breath--and when she stumbled I ran with my hand beneath her arm. We ran down past a couple of men, who turned back staring in astonishment at my behaviour--they must have recognised my face. And half way down the slope came a tumult in the air, clang-clank, clang-clank, and we stopped, and presently over the hill-crest those war things came flying one behind the other."
    
    The man seemed hesitating on the verge of a description.
    
    "What were they like?" I asked.
    
    "They had never fought," he said. "They were just like our ironclads are nowadays; they had never fought. No one knew what they might do, with excited men inside them; few even cared to speculate. They were great driving things shaped like spear-heads without a shaft, with a propeller in the place of the shaft."
    
    "Steel?"
    
    "Not steel."
    
    "Aluminum?"
    
    "No, no, nothing of that sort. An alloy that was very common--as common as brass, for example. It was called--let me see--" He squeezed his forehead with the fingers of one hand. "I am forgetting everything," he said.
    
    "And they carried guns?"
    
    "Little guns, firing high explosive shells. They fired the guns backwards, out of the base of the leaf, so to speak, and rammed with the beak. That was the theory, you know, but they had never been fought. No one could tell exactly what was going to happen. And meanwhile I suppose it was very fine to go whirling through the air like a flight of young swallows, swift and easy. I guess the captains tried not to think too clearly what the real thing would be like. And these flying war machines, you know, were only one sort of the endless war contrivances that had been invented and had fallen into abeyance during the long peace. There were all sorts of these things that people were routing out and furbishing up; infernal things, silly things; things that had never been tried; big engines, terrible explosives, great guns. You know the silly way of these ingenious sort of men who make these things; they turn 'em out as beavers build dams, and with no more sense of the rivers they're going to divert and the lands they're going to flood!
    
    "As we went down the winding stepway to our hotel again, in the twilight, I foresaw it all: I saw how clearly and inevitably things were driving for war in Evesham's silly, violent hands, and I had some inkling of what war was bound to be under these new conditions. And even then, though I knew it was drawing near the limit of my opportunity, I could find no will to go back."
    
    He sighed.
    
    "That was my last chance.
    
    "We didn't go into the city until the sky was full of stars, so we walked out upon the high terrace, to and fro, and--she counselled me to go back.
    
    "'My dearest,' she said, and her sweet face looked up to me, 'this is Death. This life you lead is Death. Go back to them, go back to your duty--'
    
    "She began to weep, saying, between her sobs, and clinging to my arm as she said it, 'Go back--Go back.'
    
    "Then suddenly she fell mute, and, glancing down at her face, I read in an instant the thing she had thought to do. It was one of those moments when one sees.
    
    "'No!' I said.
    
    "'No?' she asked, in surprise and I think a little fearful at the answer to her thought.
    
    "'Nothing,' I said, 'shall send me back. Nothing! I have chosen. Love, I have chosen, and the world must go. Whatever happens I will live this life--I will live for you! It--nothing shall turn me aside; nothing, my dear one. Even if you died--even if you died--'
    
    "'Yes?' she murmured, softly.
    
    "'Then--I also would die.'
    
    "And before she could speak again I began to talk, talking eloquently--as I could do in that life--talking to exalt love, to make the life we were living seem heroic and glorious; and the thing I was deserting something hard and enormously ignoble that it was a fine thing to set aside. I bent all my mind to throw that glamour upon it, seeking not only to convert her but myself to that. We talked, and she clung to me, torn too between all that she deemed noble and all that she knew was sweet. And at last I did make it heroic, made all the thickening disaster of the world only a sort of glorious setting to our unparalleled love, and we two poor foolish souls strutted there at last, clad in that splendid delusion, drunken rather with that glorious delusion, under the still stars.
    
    "And so my moment passed.
    
    "It was my last chance. Even as we went to and fro there, the leaders of the south and east were gathering their resolve, and the hot answer that shattered Evesham's bluffing for ever, took shape and waited. And, all over Asia, and the ocean, and the South, the air and the wires were throbbing with their warnings to prepare --prepare.
    
    "No one living, you know, knew what war was; no one could imagine, with all these new inventions, what horror war might bring. I believe most people still believed it would be a matter of bright uniforms and shouting charges and triumphs and flags and bands--in a time when half the world drew its food supply from regions ten thousand miles away--"
    
    The man with the white face paused. I glanced at him, and his face was intent on the floor of the carriage. A little railway station, a string of loaded trucks, a signal-box, and the back of a cottage, shot by the carriage window, and a bridge passed with a clap of noise, echoing the tumult of the train.
    
    "After that," he said, "I dreamt often. For three weeks of nights that dream was my life. And the worst of it was there were nights when I could not dream, when I lay tossing on a bed in this accursed life; and there--somewhere lost to me--things were happening--momentous, terrible things . . . I lived at nights--my days, my waking days, this life I am living now, became a faded, far-away dream, a drab setting, the cover of the book."
    
    He thought.
    
    "I could tell you all, tell you every little thing in the dream, but as to what I did in the daytime--no. I could not tell--I do not remember. My memory--my memory has gone. The business of life slips from me--"
    
    He leant forward, and pressed his hands upon his eyes. For a long time he said nothing.
    
    "And then?" said I.
    
    "The war burst like a hurricane."
    
    He stared before him at unspeakable things.
    
    "And then?" I urged again.
    
    "One touch of unreality," he said, in the low tone of a man who speaks to himself," and they would have been nightmares. But they were not nightmares--they were not nightmares. No!"
    
    He was silent for so long that it dawned upon me that there was a danger of losing the rest of the story. But he went on talking again in the same tone of questioning self-communion.
    
    "What was there to do but flight? I had not thought the war would touch Capri--I had seemed to see Capri as being out of it all, as the contrast to it all; but two nights after the whole place was shouting and bawling, every woman almost and every other man wore a badge--Evesham's badge--and there was no music but a jangling war-song over and over again, and everywhere men enlisting, and in the dancing halls they were drilling. The whole island was awhirl with rumours; it was said, again and again, that fighting had begun. I had not expected this. I had seen so little of the life of pleasure that I had failed to reckon with this violence of the amateurs. And as for me, I was out of it. I was like the man who might have prevented the firing of a magazine. The time had gone. I was no one; the vainest stripling with a badge counted for more than I. The crowd jostled us and bawled in our ears; that accursed song deafened us; a woman shrieked at my lady because no badge was on her, and we two went back to our own place again, ruffled and insulted--my lady white and silent, and I aquiver with rage. So furious was I, I could have quarrelled with her if I could have found one shade of accusation in her eyes.
    
    "All my magnificence had gone from me. I walked up and down our rock cell, and outside was the darkling sea and a light to the southward that flared and passed and came again.
    
    "'We must get out of this place,' I said over and over. 'I have made my choice, and I will have no hand in these troubles. I will have nothing of this war. We have taken our lives out of all these things. This is no refuge for us. Let us go.'
    
    "And the next day we were already in flight from the war that covered the world.
    
    "And all the rest was Flight--all the rest was Flight."
    
    He mused darkly.
    
    "How much was there of it?"
    
    He made no answer.
    
    "How many days?"
    
    His face was white and drawn and his hands were clenched. He took no heed of my curiosity.
    
    I tried to draw him back to his story with questions.
    
    "Where did you go?" I said.
    
    "When?"
    
    "When you left Capri."
    
    "South-west," he said, and glanced at me for a second. "We went in a boat."
    
    "But I should have thought an aeroplane?"
    
    "They had been seized."
    
    I questioned him no more. Presently I thought he was beginning again. He broke out in an argumentative monotone:
    
    "But why should it be? If, indeed, this battle, this slaughter and stress is life, why have we this craving for pleasure and beauty? If there is no refuge, if there is no place of peace, and if all our dreams of quiet places are a folly and a snare, why have we such dreams? Surely it was no ignoble cravings, no base intentions, had brought us to this; it was Love had isolated us. Love had come to me with her eyes and robed in her beauty, more glorious than all else in life, in the very shape and colour of life, and summoned me away. I had silenced all the voices, I had answered all the questions--I had come to her. And suddenly there was nothing but War and Death!"
    
    I had an inspiration. " After all," I said, "it could have been only a dream."
    
    "A dream!" he cried, flaming upon me, "a dream--when, even now--"
    
    For the first time he became animated. A faint flush crept into his cheek. He raised his open hand and clenched it, and dropped it to his knee. He spoke, looking away from me, and for all the rest of the time he looked away. "We are but phantoms!" he said, "and the phantoms of phantoms, desires like cloud-shadows and wills of straw that eddy in the wind; the days pass, use and wont carry us through as a train carries the shadow of its lights--so be it! But one thing is real and certain, one thing is no dream- stuff, but eternal and enduring. It is the centre of my life, and all other things about it are subordinate or altogether vain. I loved her, that woman of a dream. And she and I are dead together!
    
    "A dream! How can it be a dream, when it drenched a living life with unappeasable sorrow, when it makes all that I have lived for and cared for, worthless and unmeaning?
    
    "Until that very moment when she was killed I believed we had still a chance of getting away," he said. "All through the night and morning that we sailed across the sea from Capri to Salerno, we talked of escape. We were full of hope, and it clung about us to the end, hope for the life together we should lead, out of it all, out of the battle and struggle, the wild and empty passions, the empty arbitrary 'thou shalt' and 'thou shalt not' of the world. We were uplifted, as though our quest was a holy thing, as though love for another was a mission . . . .
    
    "Even when from our boat we saw the fair face of that great rock Capri--already scarred and gashed by the gun emplacements and hiding-places that were to make it a fastness--we reckoned nothing of the imminent slaughter, though the fury of preparation hung about in the puffs and clouds of dust at a hundred points amidst the gray; but, indeed, I made a text of that and talked. There, you know, was the rock, still beautiful for all its scars, with its countless windows and arches and ways, tier upon tier, for a thousand feet, a vast carving of gray, broken by vine-clad terraces, and lemon and orange groves, and masses of agave and prickly pear, and puffs of almond blossom. And out under the archway that is built over the Piccola Marina other boats were coming; and as we came round the cape and within sight of the mainland, another little string of boats came into view, driving before the wind towards the south-west. In a little while a multitude had come out, the remoter just little specks of ultramarine in the shadow of the eastward cliff.
    
    "'It is love and reason,' I said, 'fleeing from all this madness of war.'
    
    "And though we presently saw a squadron of aeroplanes flying across the southern sky we did not heed it. There it was--a line of little dots in the sky--and then more, dotting the south-eastern horizon, and then still more, until all that quarter of the sky was stippled with blue specks. Now they were all thin little strokes of blue, and now one and now a multitude would heel and catch the sun and become short flashes of light. They came, rising and falling and growing larger, like some huge flight of gulls or rooks or such-like birds, moving with a marvellous uniformity, and ever as they drew nearer they spread over a greater width of sky. The southward wind flung itself in an arrow-headed cloud athwart the sun. And then suddenly they swept round to the eastward and streamed eastward, growing smaller and smaller and clearer and clearer again until they vanished from the sky. And after that we noted to the northward and very high Evesham's fighting machines hanging high over Naples like an evening swarm of gnats.
    
    "It seemed to have no more to do with us than a flight of birds.
    
    "Even the mutter of guns far away in the south-east seemed to us to signify nothing . . .
    
    "Each day, each dream after that, we were still exalted, still seeking that refuge where we might live and love. Fatigue had come upon us, pain and many distresses. For though we were dusty and stained by our toilsome tramping, and half starved and with the horror of the dead men we had seen and the flight of the peasants--for very soon a gust of fighting swept up the peninsula--with these things haunting our minds it still resulted only in a deepening resolution to escape. Oh, but she was brave and patient! She who had never faced hardship and exposure had courage for herself and me. We went to and fro seeking an outlet, over a country all commandeered and ransacked by the gathering hosts of war. Always we went on foot. At first there were other fugitives, but we did not mingle with them. Some escaped northward, some were caught in the torrent of peasantry that swept along the main roads; many gave themselves into the hands of the soldiery and were sent northward. Many of the men were impressed. But we kept away from these things; we had brought no money to bribe a passage north, and I feared for my lady at the hands of these conscript crowds. We had landed at Salerno, and we had been turned back from Cava, and we had tried to cross towards Taranto by a pass over Mount Alburno, but we had been driven back for want of food, and so we had come down among the marshes by Paestum, where those great temples stand alone. I had some vague idea that by Paestum it might be possible to find a boat or something, and take once more to sea. And there it was the battle overtook us.
    
    "A sort of soul-blindness had me. Plainly I could see that we were being hemmed in; that the great net of that giant Warfare had us in its toils. Many times we had seen the levies that had come down from the north going to and fro, and had come upon them in the distance amidst the mountains making ways for the ammunition and preparing the mounting of the guns. Once we fancied they had fired at us, taking us for spies--at any rate a shot had gone shuddering over us. Several times we had hidden in woods from hovering aeroplanes.
    
    "But all these things do not matter now, these nights of flight and pain . . . We were in an open place near those great temples at Paestum, at last, on a blank stony place dotted with spiky bushes, empty and desolate and so flat that a grove of eucalyptus far away showed to the feet of its stems. How I can see it! My lady was sitting down under a bush resting a little, for she was very weak and weary, and I was standing up watching to see if I could tell the distance of the firing that came and went. They were still, you know, fighting far from each other, with those terrible new weapons that had never before been used: guns that would carry beyond sight, and aeroplanes that would do--What they would do no man could foretell.
    
    "I knew that we were between the two armies, and that they drew together. I knew we were in danger, and that we could not stop there and rest!
    
    "Though all these things were in my mind, they were in the background. They seemed to be affairs beyond our concern. Chiefly, I was thinking of my lady. An aching distress filled me. For the first time she had owned herself beaten and had fallen a-weeping. Behind me I could hear her sobbing, but I would not turn round to her because I knew she had need of weeping, and had held herself so far and so long for me. It was well, I thought, that she would weep and rest and then we would toil on again, for I had no inkling of the thing that hung so near. Even now I can see her as she sat there, her lovely hair upon her shoulder, can mark again the deepening hollow of her cheek.
    
    "'If we had parted,' she said, 'if I had let you go.'
    
    "'No,' said I.' Even now, I do not repent. I will not repent; I made my choice, and I will hold on to the end.'
    
    "And then--
    
    "Overhead in the sky flashed something and burst, and all about us I heard the bullets making a noise like a handful of peas suddenly thrown. They chipped the stones about us, and whirled fragments from the bricks and passed . . . ."
    
    He put his hand to his mouth, and then moistened his lips.
    
    "At the flash I had turned about . . .
    
    "You know--she stood up--
    
    "She stood up, you know, and moved a step towards me--as though she wanted to reach me--
    
    "And she had been shot through the heart."
    
    He stopped and stared at me. I felt all that foolish incapacity an Englishman feels on such occasions. I met his eyes for a moment, and then stared out of the window. For a long space we kept silence. When at last I looked at him he was sitting back in his corner, his arms folded, and his teeth gnawing at his knuckles.
    
    He bit his nail suddenly, and stared at it.
    
    "I carried her," he said, "towards the temples, in my arms--as though it mattered. I don't know why. They seemed a sort of sanctuary, you know, they had lasted so long, I suppose.
    
    "She must have died almost instantly. Only--I talked to her all the way."
    
    Silence again.
    
    "I have seen those temples," I said abruptly, and indeed he had brought those still, sunlit arcades of worn sandstone very vividly before me.
    
    "It was the brown one, the big brown one. I sat down on a fallen pillar and held her in my arms . . . Silent after the first babble was over. And after a little while the lizards came out and ran about again, as though nothing unusual was going on, as though nothing had changed . . . It was tremendously still there, the sun high and the shadows still; even the shadows of the weeds upon the entablature were still--in spite of the thudding and banging that went all about the sky.
    
    "I seem to remember that the aeroplanes came up out of the south, and that the battle went away to the west. One aeroplane was struck, and overset and fell. I remember that--though it didn't interest me in the least. It didn't seem to signify. It was like a wounded gull, you know--flapping for a time in the water. I could see it down the aisle of the temple--a black thing in the bright blue water.
    
    "Three or four times shells burst about the beach, and then that ceased. Each time that happened all the lizards scuttled in and hid for a space. That was all the mischief done, except that once a stray bullet gashed the stone hard by--made just a fresh bright surface.
    
    "As the shadows grew longer, the stillness seemed greater.
    
    "The curious thing," he remarked, with the manner of a man who makes a trivial conversation, "is that I didn't think--at all. I sat with her in my arms amidst the stones--in a sort of lethargy--stagnant.
    
    "And I don't remember waking up. I don't remember dressing that day. I know I found myself in my office, with my letters all slit open in front of me, and how I was struck by the absurdity of being there, seeing that in reality I was sitting, stunned, in that Paestum Temple with a dead woman in my arms. I read my letters like a machine. I have forgotten what they were about."
    
    He stopped, and there was a long silence.
    
    Suddenly I perceived that we were running down the incline from Chalk Farm to Euston. I started at this passing of time. I turned on him with a brutal question, with the tone of "Now or never."
    
    "And did you dream again?"
    
    "Yes."
    
    He seemed to force himself to finish. His voice was very low.
    
    "Once more, and as it were only for a few instants. I seemed to have suddenly awakened out of a great apathy, to have risen into a sitting position, and the body lay there on the stones beside me.
    
    A gaunt body. Not her, you know. So soon--it was not her . . . .
    
    "I may have heard voices. I do not know. Only I knew clearly that men were coming into the solitude and that that was a last outrage.
    
    "I stood up and walked through the temple, and then there came into sight--first one man with a yellow face, dressed in a uniform of dirty white, trimmed with blue, and then several, climbing to the crest of the old wall of the vanished city, and crouching there. They were little bright figures in the sunlight, and there they hung, weapon in hand, peering cautiously before them.
    
    "And further away I saw others and then more at another point in the wall. It was a long lax line of men in open order.
    
    "Presently the man I had first seen stood up and shouted a command, and his men came tumbling down the wall and into the high weeds towards the temple. He scrambled down with them and led them. He came facing towards me, and when he saw me he stopped.
    
    "At first I had watched these men with a mere curiosity, but when I had seen they meant to come to the temple I was moved to forbid them. I shouted to the officer.
    
    "'You must not come here,' I cried, 'I am here. I am here with my dead.'
    
    "He stared, and then shouted a question back to me in some unknown tongue.
    
    "I repeated what I had said.
    
    "He shouted again, and I folded my arms and stood still. Presently he spoke to his men and came forward. He carried a drawn sword.
    
    "I signed to him to keep away, but he continued to advance. I told him again very patiently and clearly: 'You must not come here. These are old temples and I am here with my dead.'
    
    "Presently he was so close I could see his face clearly. It was a narrow face, with dull gray eyes, and a black moustache. He had a scar on his upper lip, and he was dirty and unshaven. He kept shouting unintelligible things, questions, perhaps, at me.
    
    "I know now that he was afraid of me, but at the time that did not occur to me. As I tried to explain to him, he interrupted me in imperious tones, bidding me, I suppose, stand aside.
    
    "He made to go past me, and I caught hold of him.
    
    "I saw his face change at my grip.
    
    "'You fool,' I cried. 'Don't you know? She is dead!'
    
    "He started back. He looked at me with cruel eyes. I saw a sort of exultant resolve leap into them--delight. Then, suddenly, with a scowl, he swept his sword back--SO--and thrust."
    
    He stopped abruptly.
    
    I became aware of a change in the rhythm of the train. The brakes lifted their voices and the carriage jarred and jerked. This present world insisted upon itself, became clamourous. I saw through the steamy window huge electric fights glaring down from tall masts upon a fog, saw rows of stationary empty carriages passing by, and then a signal-box hoisting its constellation of green and red into the murky London twilight, marched after them. I looked again at his drawn features.
    
    "He ran me through the heart. It was with a sort of astonishment--no fear, no pain--but just amazement, that I felt it pierce me, felt the sword drive home into my body. It didn't hurt, you know. It didn't hurt at all."
    
    The yellow platform lights came into the field of view, passing first rapidly, then slowly, and at last stopping with a jerk. Dim shapes of men passed to and fro without.
    
    "Euston!" cried a voice.
    
    "Do you mean--?"
    
    "There was no pain, no sting or smart. Amazement and then darkness sweeping over everything. The hot, brutal face before me, the face of the man who had killed me, seemed to recede. It swept out of existence--"
    
    "Euston!" clamoured the voices outside; "Euston!"
    
    The carriage door opened admitting a flood of sound, and a porter stood regarding us. The sounds of doors slamming, and the hoof-clatter of cab-horses, and behind these things the featureless remote roar of the London cobble-stones, came to my ears. A truckload of lighted lamps blazed along the platform.
    
    "A darkness, a flood of darkness that opened and spread and blotted out all things."
    
    "Any luggage, sir?" said the porter.
    
    "And that was the end?" I asked.
    
    He seemed to hesitate. Then, almost inaudibly, he answered, "NO."
    
    "You mean?"
    
    "I couldn't get to her. She was there on the other side of the temple-- And then--"
    
    "Yes," I insisted. "Yes?"
    
    "Nightmares," he cried; "nightmares indeed! My God! Great birds that fought and tore."`,
    genre: "Sci-Fi",
  },
  {
    user: "60c025182524913ea661432e",
    title: "A Witch Shall Be Born",
    text: `1. — THE BLOOD-RED CRESCENT
    TARAMIS, Queen of Khauran, awakened from a dream-haunted slumber to a silence that seemed more like the stillness of nighted catacombs than the normal quiet of a sleeping place. She lay staring into the darkness, wondering why the candles in their golden candelabra had gone out. A flecking of stars marked a gold-barred casement that lent no illumination to the interior of the chamber. But as Taramis lay there, she became aware of a spot of radiance glowing in the darkness before her. She watched, puzzled. It grew and its intensity deepened as it expanded, a widening disk of lurid light hovering against the dark velvet hangings of the opposite wall. Taramis caught her breath, starting up to a sitting position. A dark object was visible in that circle of light—a human head.
    
    In a sudden panic the queen opened her lips to cry out for her maids; then she checked herself. The glow was more lurid, the head more vividly limned. It was a woman's head, small, delicately molded, superbly poised, with a high-piled mass of lustrous black hair. The face grew distinct as she stared—and it was the sight of this face which froze the cry in Taramis's throat. The features were her own! She might have been looking into a mirror which subtly altered her reflection, lending it a tigerish gleam of eye, a vindictive curl of lip.
    
    "Ishtar!" gasped Taramis. "I am bewitched!"
    
    Appallingly, the apparition spoke, and its voice was like honeyed venom.
    
    "Bewitched? No, sweet sister! Here is no sorcery."
    
    "Sister?" stammered the bewildered girl. "I have no sister."
    
    "You never had a sister?" came the sweet, poisonously mocking voice. "Never a twin sister whose flesh was as soft as yours to caress or hurt?"
    
    "Why, once I had a sister," answered Taramis, still convinced that she was in the grip of some sort of nightmare. "But she died."
    
    The beautiful face in the disk was convulsed with the aspect of a fury; so hellish became its expression that Taramis, cowering back, half expected to see snaky locks writhe hissing about the ivory brow.
    
    "You lie!" The accusation was spat from between the snarling red lips. "She did not die! Fool! Oh, enough of this mummery! Look—and let your sight be blasted!"
    
    Light ran suddenly along the hangings like flaming serpents, and incredibly the candles in the golden sticks flared up again. Taramis crouched on her velvet couch, her lithe legs flexed beneath her, staring wide-eyed at the pantherish figure which posed mockingly before her. It was as if she gazed upon another Taramis, identical with herself in every contour of feature and limb, yet animated by an alien and evil personality. The face of this stranger waif reflected the opposite of every characteristic the countenance of the queen denoted. Lust and mystery sparkled in her scintillant eyes, cruelty lurked in the curl of her full red lips. Each movement of her supple body was subtly suggestive. Her coiffure imitated that of the queen's, on her feet were gilded sandals such as Taramis wore in her boudoir. The sleeveless, low-necked silk tunic, girdled at the waist with a cloth-of-gold cincture, was a duplicate of the queen's night-garment.
    
    "Who are you?" gasped Taramis, an icy chill she could not explain creeping along her spine. "Explain your presence before I call my ladies-in-waiting to summon the guard!"
    
    "Scream until the roof beams crack," callously answered the stranger. "Your sluts will not wake till dawn, though the palace spring into flames about them. Your guardsmen will not hear your squeals; they have been sent out of this wing of the palace."
    
    "What!" exclaimed Taramis, stiffening with outraged majesty. "Who dared give my guardsmen such a command?"
    
    "I did, sweet sister," sneered the other girl. "A little while ago, before I entered. They thought it was their darling adored queen. Ha! How beautifully I acted the part! With what imperious dignity, softened by womanly sweetness, did I address the great louts who knelt in their armor and plumed helmets!"
    
    
    TARAMIS felt as if a stifling net of bewilderment were being drawn about her.
    
    "Who are you?" she cried desperately. "What madness is this? Why do you come here?"
    
    "Who am I?" There was the spite of a she-cobra's hiss in the soft response. The girl stepped to the edge of the couch, grasped the queen's white shoulders with fierce fingers, and bent to glare full into the startled eyes of Taramis. And under the spell of that hypnotic glare, the queen forgot to resent the unprecedented outrage of violent hands laid on regal flesh.
    
    "Fool!" gritted the girl between her teeth. "Can you ask? Can you wonder? I am Salome!"
    
    "Salome!" Taramis breathed the word, and the hairs prickled on her scalp as she realized the incredible, numbing truth of the statement. "I thought you died within the hour of your birth," she said feebly.
    
    "So thought many," answered the woman who called herself Salome. "They carried me into the desert to die, damn them! I, a mewing, puling babe whose life was so young it was scarcely the flicker of a candle. And do you know why they bore me forth to die?"
    
    "I—I have heard the story—" faltered Taramis.
    
    Salome laughed fiercely, and slapped her bosom. The low-necked tunic left the upper parts of her firm breasts bare, and between them there shone a curious mark—a crescent, red as blood.
    
    "The mark of the witch!" cried Taramis, recoiling.
    
    "Aye!" Salome's laughter was dagger-edged with hate. "The curse of the kings of Khauran! Aye, they tell the tale in the market-places, with wagging beards and rolling eyes, the pious fools! They tell how the first queen of our line had traffic with a fiend of darkness and bore him a daughter who lives in foul legendry to this day. And thereafter in each century a girl baby was born into the Askhaurian dynasty, with a scarlet half-moon between her breasts, that signified her destiny.
    
    "'Every century a witch shall be born.' So ran the ancient curse. And so it has come to pass. Some were slain at birth, as they sought to slay me. Some walked the earth as witches, proud daughters of Khauran, with the moon of hell burning upon their ivory bosoms. Each was named Salome. I too am Salome. It was always Salome, the witch. It will always be Salome, the witch, even when the mountains of ice have roared down from the pole and ground the civilizations to ruin, and a new world has risen from the ashes and dust—even then there shall be Salomes to walk the earth, to trap men's hearts by their sorcery, to dance before the kings of the world, to see the heads of the wise men fall at their pleasure."
    
    "But—but you—" stammered Taramis.
    
    "I?" The scintillant eyes burned like dark fires of mystery. "They carried me into the desert far from the city, and laid me naked on the hot sand, under the flaming sun. And then they rode away and left me for the jackals and the vultures and the desert wolves.
    
    "But the life in me was stronger than the life in common folk, for it partakes of the essence of the forces that seethe in the black gulfs beyond mortal ken. The hours passed, and the sun slashed down like the molten flames of hell, but I did not die; aye, something of that torment I remember, faintly and far away, as one remembers a dim, formless dream. Then there were camels, and yellow-skinned men who wore silk robes and spoke in a weird tongue. Strayed from the caravan road, they passed close by, and their leader saw me, and recognized the scarlet crescent on my bosom. He took me up and gave me life.
    
    "He was a magician from far Khitai, returning to his native kingdom after a journey to Stygia. He took me with him to purple-towering Paikang, its minarets rising amid the vine-festooned jungles of bamboo, and there I grew to womanhood under his teaching. Age had steeped him deep in black wisdom, not weakened his powers of evil. Many things he taught me—"
    
    She paused, smiling enigmatically, with wicked mystery gleaming in her dark eyes. Then she tossed her head.
    
    "He drove me from him at last, saying that I was but a common witch in spite of his teachings, and not fit to command the mighty sorcery he would have taught me. He would have made me queen of the world and ruled the nations through me, he said, but I was only a harlot of darkness. But what of it? I could never endure to seclude myself in a golden tower, and spend the long hours staring into a crystal globe, mumbling over incantations written on serpent's skin in the blood of virgins, poring over musty volumes in forgotten languages.
    
    "He said I was but an earthly sprite, knowing naught of the deeper gulfs of cosmic sorcery. Well, this world contains all I desire—power, and pomp, and glittering pageantry, handsome men and soft women for my paramours and my slaves. He had told me who I was, of the curse and my heritage. I have returned to take that to which I have as much right as you. Now it is mine by right of possession."
    
    
    "WHAT do you mean?" Taramis sprang up and faced her sister, stung out of her bewilderment and fright. "Do you imagine that by drugging a few of my maids and tricking a few of my guardsmen you have established a claim to the throne of Khauran? Do not forget that I am Queen of Khauran! I shall give you a place of honor, as my sister, but—"
    
    Salome laughed hatefully.
    
    "How generous of you, dear, sweet sister! But before you begin putting me in my place—perhaps you will tell me whose soldiers camp in the plain outside the city walls?"
    
    "They are the Shemitish mercenaries of Constantius, the Kothic voivode of the Free Companies."
    
    "And what do they in Khauran?" cooed Salome.
    
    Taramis felt that she was being subtly mocked, but she answered with an assumption of dignity which she scarcely felt.
    
    "Constantius asked permission to pass along the borders of Khauran on his way to Turan. He himself is hostage for their good behavior as long as they are within my domains."
    
    "And Constantius," pursued Salome. "Did he not ask your hand today?"
    
    Taramis shot her a clouded glance of suspicion.
    
    "How did you know that?"
    
    An insolent shrug of the slim naked shoulders was the only reply.
    
    "You refused, dear sister?"
    
    "Certainly I refused!" exclaimed Taramis angrily. "Do you, an Askhaurian princess yourself, suppose that the Queen of Khauran could treat such a proposal with anything but disdain? Wed a bloody-handed adventurer, a man exiled from his own kingdom because of his crimes, and the leader of organized plunderers and hired murderers?
    
    "I should never have allowed him to bring his black-bearded slayers into Khauran. But he is virtually a prisoner in the south tower, guarded by my soldiers. Tomorrow I shall bid him order his troops to leave the kingdom. He himself shall be kept captive until they are over the border. Meantime, my soldiers man the walls of the city, and I have warned him that he will answer for any outrages perpetrated on the villagers or shepherds by his mercenaries."
    
    "He is confined in the south tower?" asked Salome.
    
    "That is what I said. Why do you ask?"
    
    For answer Salome clapped her hands, and lifting her voice, with a gurgle of cruel mirth in it, called: "The queen grants you an audience, Falcon!"
    
    A gold-arabesqued door opened and a tall figure entered the chamber, at the sight of which Taramis cried out in amazement and anger.
    
    "Constantius! You dare enter my chamber!"
    
    "As you see, Your Majesty!" He bent his dark, hawk-like head in mock humility.
    
    Constantius, whom men called Falcon, was tall, broad-shouldered, slim-waisted, lithe and strong as pliant steel. He was handsome in an aquiline, ruthless way. His face was burnt dark by the sun, and his hair, which grew far back from his high, narrow forehead, was black as a raven. His dark eyes were penetrating and alert, the hardness of his thin lips not softened by his thin black mustache. His boots were of Kordavan leather, his hose and doublet of plain, dark silk, tarnished with the wear of the camps and the stains of armor rust.
    
    Twisting his mustache, he let his gaze travel up and down the shrinking queen with an effrontery that made her wince.
    
    "By Ishtar, Taramis," he said silkily, "I find you more alluring in your night-tunic than in your queenly robes. Truly, this is an auspicious night!"
    
    Fear grew in the queen's dark eyes. She was no fool; she knew that Constantius would never dare this outrage unless he was sure of himself.
    
    "You are mad!" she said. "If I am in your power in this chamber, you are no less in the power of my subjects, who will rend you to pieces if you touch me. Go at once, if you would live."
    
    Both laughed mockingly, and Salome made an impatient gesture.
    
    "Enough of this farce; let us on to the next act in the comedy. Listen, dear sister: it was I who sent Constantius here. When I decided to take the throne of Khauran, I cast about for a man to aid me, and chose the Falcon, because of his utter lack of all characteristics men call good."
    
    "I am overwhelmed, princess," murmured Constantius sardonically, with a profound bow.
    
    "I sent him to Khauran, and, once his men were camped in the plain outside, and he was in the palace, I entered the city by that small gate in the west wall—the fools guarding it thought it was you returning from some nocturnal adventure—"
    
    "You hell-cat!" Taramis's cheeks flamed and her resentment got the better of her regal reserve.
    
    Salome smiled hardly.
    
    "They were properly surprised and shocked, but admitted me without question. I entered the palace the same way, and gave the order to the surprised guards that sent them marching away, as well as the men who guarded Constantius in the south tower. Then I came here, attending to the ladies-in-waiting on the way."
    
    Taramis's fingers clenched and she paled.
    
    "Well, what next?" she asked in a shaky voice.
    
    "Listen!" Salome inclined her head. Faintly through the casement there came the clank of marching men in armor; gruff voices shouted in an alien tongue, and cries of alarm mingled with the shouts.
    
    "The people awaken and grow fearful," said Constantius sardonically. "You had better go and reassure them, Salome!"
    
    "Call me Taramis," answered Salome. "We must become accustomed to it."
    
    "What have you done?" cried Taramis. "What have you done?"
    
    "I have gone to the gates and ordered the soldiers to open them," answered Salome. "They were astounded, but they obeyed. That is the Falcon's army you hear, marching into the city."
    
    "You devil!" cried Taramis. "You have betrayed my people, in my guise! You have made me seem a traitor! Oh, I shall go to them—"
    
    With a cruel laugh Salome caught her wrist and jerked her back. The magnificent suppleness of the queen was helpless against the vindictive strength that steeled Salome's slender limbs.
    
    "You know how to reach the dungeons from the palace, Constantius?" said the witch-girl. "Good. Take this spitfire and lock her into the strongest cell. The jailers are all sound in drugged sleep. I saw to that. Send a man to cut their throats before they can awaken. None must ever know what has occurred tonight. Thenceforward I am Taramis, and Taramis is a nameless prisoner in an unknown dungeon."
    
    Constantius smiled with a glint of strong white teeth under his thin mustache.
    
    "Very good; but you would not deny me a little—ah—amusement first?"
    
    "Not I! Tame the scornful hussy as you will." With a wicked laugh Salome flung her sister into the Kothian's arms, and turned away through the door that opened into the outer corridor.
    
    Fright widened Taramis's lovely eyes, her supple figure rigid and straining against Constantius's embrace. She forgot the men marching in the streets, forgot the outrage to her queenship, in the face of the menace to her womanhood. She forgot all sensations but terror and shame as she faced the complete cynicism of Constantius's burning, mocking eyes, felt his hard arms crushing her writhing body.
    
    Salome, hurrying along the corridor outside, smiled spitefully as a scream of despair and agony rang shuddering through the palace.
    
    2. — THE TREE OF DEATH
    THE young soldier's hose and shirt were smeared with dried blood, wet with sweat and gray with dust. Blood oozed from the deep gash in his thigh, from the cuts on his breast and shoulder. Perspiration glistened on his livid face and his fingers were knotted in the cover of the divan on which he lay. Yet his words reflected mental suffering that outweighed physical pain.
    
    "She must be mad!" he repeated again and again, like one still stunned by some monstrous and incredible happening. "It's like a nightmare! Taramis, whom all Khauran loves, betraying her people to that devil from Koth! Oh, Ishtar, why was I not slain? Better die than live to see our queen turn traitor and harlot!"
    
    "Lie still, Valerius," begged the girl who was washing and bandaging his wounds with trembling hands. "Oh, please lie still, darling! You will make your wounds worse. I dared not summon a leech—"
    
    "No," muttered the wounded youth. "Constantius's blue-bearded devils will be searching the quarters for wounded Khaurani; they'll hang every man who has wounds to show he fought against them. Oh, Taramis, how could you betray the people who worshipped you?" In his fierce agony he writhed, weeping in rage and shame, and the terrified girl caught him in her arms, straining his tossing head against her bosom, imploring him to be quiet.
    
    "Better death than the black shame that has come upon Khauran this day," he groaned. "Did you see it, Ivga?"
    
    "No, Valerius." Her soft, nimble fingers were again at work, gently cleansing and closing the gaping edges of his raw wounds. "I was awakened by the noise of fighting in the streets—I looked out a casement and saw the Shemites cutting down people; then presently I heard you calling me faintly from the alley door."
    
    "I had reached the limits of my strength," he muttered. "I fell in the alley and could not rise. I knew they'd find me soon if I lay there—I killed three of the blue-bearded beasts, by Ishtar! They'll never swagger through Khauran's streets, by the gods! The fiends are tearing their hearts in hell!"
    
    The trembling girl crooned soothingly to him, as to a wounded child, and closed his panting lips with her own cool sweet mouth. But the fire that raged in his soul would not allow him to lie silent.
    
    "I was not on the wall when the Shemites entered," he burst out. "I was asleep in the barracks, with the others not on duty. It was just before dawn when our captain entered, and his face was pale under his helmet. 'The Shemites are in the city,'" he said. "The queen came to the southern gate and gave orders that they should be admitted. She made the men come down from the walls, where they've been on guard since Constantius entered the kingdom. I don't understand it, and neither does anyone else, but I heard her give the order, and we obeyed as we always do. We are ordered to assemble in the square before the palace. Form ranks outside the barracks and march—leave your arms and armor here. Ishtar knows what this means, but it is the queen's order.
    
    "Well, when we came to the square the Shemites were drawn up on foot opposite the palace, ten thousand of the blue-bearded devils, fully armed, and people's heads were thrust out of every window and door on the square. The streets leading into the square were thronged by bewildered folk. Taramis was standing on the steps of the palace, alone except for Constantius, who stood stroking his mustache like a great lean cat who has just devoured a sparrow. But fifty Shemites with bows in their hands were ranged below them."
    
    "That's where the queen's guard should have been, but they were drawn up at the foot of the palace stair, as puzzled as we, though they had come fully armed, in spite of the queen's order."
    
    "Taramis spoke to us then, and told us that she had reconsidered the proposal made her by Constantius—why, only yesterday she threw it in his teeth in open court—and that she had decided to make him her royal consort. She did not explain why she had brought the Shemites into the city so treacherously. But she said that, as Constantius had control of a body of professional fighting-men, the army of Khauran would no longer be needed, and therefore she disbanded it, and ordered us to go quietly to our homes."
    
    "Why, obedience to our queen is second nature to us, but we were struck dumb and found no word to answer. We broke ranks almost before we knew what we were doing, like men in a daze."
    
    "But when the palace guard was ordered to disarm likewise and disband, the captain of the guard, Conan, interrupted. Men said he was off duty the night before, and drunk. But he was wide awake now. He shouted to the guardsmen to stand as they were until they received an order from him—and such is his dominance of his men, that they obeyed in spite of the queen. He strode up to the palace steps and glared at Taramis—and then he roared: 'This is not the queen! This isn't Taramis! It's some devil in masquerade!'
    
    "Then hell was to pay! I don't know just what happened. I think a Shemite struck Conan, and Conan killed him. The next instant the square was a battleground. The Shemites fell on the guardsmen, and their spears and arrows struck down many soldiers who had already disbanded."
    
    "Some of us grabbed up such weapons as we could and fought back. We hardly knew what we were fighting for, but it was against Constantius and his devils—not against Taramis, I swear it! Constantius shouted to cut the traitors down. We were not traitors!" Despair and bewilderment shook his voice. The girl murmured pityingly, not understanding it all, but aching in sympathy with her lover's suffering.
    
    
    "THE people did not know which side to take. It was a madhouse of confusion and bewilderment. We who fought didn't have a chance, in no formation, without armor and only half armed. The guards were fully armed and drawn up in a square, but there were only five hundred of them. They took a heavy toll before they were cut down, but there could be only one conclusion to such a battle. And while her people were being slaughtered before her, Taramis stood on the palace steps, with Constantius's arm about her waist, and laughed like a heartless, beautiful fiend! Gods, it's all mad—mad!
    
    "I never saw a man fight as Conan fought. He put his back to the courtyard wall, and before they overpowered him the dead men were strewn in heaps thigh-deep about him. But at last they dragged him down, a hundred against one. When I saw him fall I dragged myself away feeling as if the world had burst under my very fingers. I heard Constantius call to his dogs to take the captain alive—stroking his mustache, with that hateful smile on his lips!"
    
    
    THAT smile was on the lips of Constantius at that very moment. He sat his horse among a cluster of his men—thick-bodied Shemites with curled blue-black beards and hooked noses; the low-swinging sun struck glints from their peaked helmets and the silvered scales of their corselets. Nearly a mile behind, the walls and towers of Khauran rose sheer out of the meadowlands.
    
    By the side of the caravan road a heavy cross had been planted, and on this grim tree a man hung, nailed there by iron spikes through his hands and feet. Naked but for a loin-cloth, the man was almost a giant in stature, and his muscles stood out in thick corded ridges on limbs and body, which the sun had long ago burned brown. The perspiration of agony beaded his face and his mighty breast, but from under the tangled black mane that fell over his low, broad forehead, his blue eyes blazed with an unquenched fire. Blood oozed sluggishly from the lacerations in his hands and feet.
    
    Constantius saluted him mockingly.
    
    "I am sorry, captain," he said, "that I cannot remain to ease your last hours, but I have duties to perform in yonder city—I must not keep your delicious queen waiting!" He laughed softly. "So I leave you to your own devices—and those beauties!" He pointed meaningly at the black shadows which swept incessantly back and forth, high above.
    
    "Were it not for them, I imagine that a powerful brute like yourself should live on the cross for days. Do not cherish any illusions of rescue because I am leaving you unguarded. I have had it proclaimed that anyone seeking to take your body, living or dead, from the cross, will be flayed alive together with all the members of his family, in the public square. I am so firmly established in Khauran that my order is as good as a regiment of guardsmen. I am leaving no guard, because the vultures will not approach as long as anyone is near, and I do not wish them to feel any constraint. That is also why I brought you so far from the city. These desert vultures approach the walls no closer than this spot.
    
    "And so, brave captain, farewell! I will remember you when, in an hour, Taramis lies in my arms."
    
    Blood started afresh from the pierced palms as the victim's mallet-like fists clenched convulsively on the spike-heads. Knots and bunches of muscle started out of the massive arms, and Conan bent his head forward and spat savagely at Constantius's face. The voivode laughed coolly, wiped the saliva from his gorget and reined his horse about.
    
    "Remember me when the vultures are tearing at your living flesh," he called mockingly. "The desert scavengers are a particularly voracious breed. I have seen men hang for hours on a cross, eyeless, earless, and scalpless, before the sharp beaks had eaten their way into their vitals."
    
    Without a backward glance he rode toward the city, a supple, erect figure, gleaming in his burnished armor, his stolid, bearded henchmen jogging beside him. A faint rising of dust from the worn trail marked their passing.
    
    The man hanging on the cross was the one touch of sentient life in a landscape that seemed desolate and deserted in the late evening. Khauran, less than a mile away, might have been on the other side of the world, and existing in another age.
    
    
    SHAKING the sweat out of his eyes, Conan stared blankly at the familiar terrain. On either side of the city, and beyond it, stretched the fertile meadowlands, with cattle browsing in the distance where fields and vineyards checkered the plain. The western and northern horizons were dotted with villages, miniature in the distance. A lesser distance to the southeast a silvery gleam marked the course of a river, and beyond that river sandy desert began abruptly to stretch away and away beyond the horizon. Conan stared at that expanse of empty waste shimmering tawnily in the late sunlight as a trapped hawk stares at the open sky. A revulsion shook him when he glanced at the gleaming towers of Khauran. The city had betrayed him—trapped him into circumstances that left him hanging on a wooden cross like a hare nailed to a tree.
    
    A red lust for vengeance swept away the thought. Curses ebbed fitfully from the man's lips. All his universe contracted, focused, became incorporated in the four iron spikes that held him from life and freedom. His great muscles quivered, knotting like iron cables. With the sweat starting out on his graying skin, he sought to gain leverage, to tear the nails from the wood. It was useless. They had been driven deep. Then he tried to tear his hands off the spikes, and it was not the knifing, abysmal agony that finally caused him to cease his efforts, but the futility of it. The spike-heads were broad and heavy; he could not drag them through the wounds. A surge of helplessness shook the giant, for the first time in his life. He hung motionless, his head resting on his breast, shutting his eyes against the aching glare of the sun.
    
    A beat of wings caused him to look, just as a feathered shadow shot down out of the sky. A keen beak, stabbing at his eyes, cut his cheek, and he jerked his head aside, shutting his eyes involuntarily. He shouted, a croaking, desperate shout of menace, and the vultures swerved away and retreated, frightened by the sound. They resumed their wary circling above his head. Blood trickled over Conan's mouth, and he licked his lips involuntarily, spat at the salty taste.
    
    Thirst assailed him savagely. He had drunk deeply of wine the night before, and no water had touched his lips since before the battle in the square, that dawn. And killing was thirsty, salt-sweaty work. He glared at the distant river as a man in hell glares through the opened grille. He thought of gushing freshets of white water he had breasted, laved to the shoulders in liquid jade. He remembered great horns of foaming ale, jacks of sparkling wine gulped carelessly or spilled on the tavern floor. He bit his lip to keep from bellowing in intolerable anguish as a tortured animal bellows.
    
    The sun sank, a lurid ball in a fiery sea of blood. Against a crimson rampart that banded the horizon the towers of the city floated unreal as a dream. The very sky was tinged with blood to his misted glare. He licked his blackened lips and stared with bloodshot eyes at the distant river. It too seemed crimson with blood, and the shadows crawling up from the east seemed black as ebony.
    
    In his dulled ears sounded the louder beat of wings. Lifting his head he watched with the burning glare of a wolf the shadows wheeling above him. He knew that his shouts would frighten them away no longer. One dipped—dipped—lower and lower. Conan drew his head back as far as he could, waiting with terrible patience. The vulture swept in with a swift roar of wings. Its beak flashed down, ripping the skin on Conan's chin as he jerked his head aside; then before the bird could flash away, Conan's head lunged forward on his mighty neck muscles, and his teeth, snapping like those of a wolf, locked on the bare, wattled neck.
    
    Instantly the vulture exploded into squawking, flapping hysteria. Its thrashing wings blinded the man, and its talons ripped his chest. But grimly he hung on, the muscles starting out in lumps on his jaws. And the scavenger's neckbones crunched between those powerful teeth. With a spasmodic flutter the bird hung limp. Conan let go, spat blood from his mouth. The other vultures, terrified by the fate of their companion, were in full flight to a distant tree, where they perched like black demons in conclave.
    
    Ferocious triumph surged through Conan's numbed brain. Life beat strongly and savagely through his veins. He could still deal death; he still lived. Every twinge of sensation, even of agony, was a negation of death.
    
    "By Mitra!" Either a voice spoke, or he suffered from hallucination. "In all my life I have never seen such a thing!"
    
    
    Shaking the sweat and blood from his eyes, Conan saw four horsemen sitting their steeds in the twilight and staring up at him. Three were lean, white-robed hawks, Zuagir tribesmen without a doubt, nomads from beyond the river. The other was dressed like them in a white, girdled khalat and a flowing head-dress which, banded about the temples with a triple circlet of braided camel-hair, fell to his shoulders. But he was not a Shemite. The dust was not so thick, nor Conan's hawk-like sight so clouded, that he could not perceive the man's facial characteristics.
    
    He was as tall as Conan, though not so heavy-limbed. His shoulders were broad and his supple figure was hard as steel and whalebone. A short black beard did not altogether mask the aggressive jut of his lean jaw, and gray eyes cold and piercing as a sword gleamed from the shadow of the kaffiyeh. Quieting his restless steed with a quick, sure hand, this man spoke: "By Mitra, I should know this man!"
    
    "Aye!" It was the guttural accents of a Zuagir. "It is the Cimmerian who was captain of the queen's guard!"
    
    "She must be casting off all her old favorites," muttered the rider. "Who'd have ever thought it of Queen Taramis? I'd rather have had a long, bloody war. It would have given us desert folk a chance to plunder. As it is we've come this close to the walls and found only this nag"—he glanced at a fine gelding led by one of the nomads—"and this dying dog."
    
    Conan lifted his bloody head.
    
    "If I could come down from this beam I'd make a dying dog out of you, you Zaporoskan thief!" he rasped through blackened lips.
    
    "Mitra, the knave knows me!" exclaimed the other. "How, knave, do you know me?"
    
    "There's only one of your breed in these parts," muttered Conan. "You are Olgerd Vladislav, the outlaw chief."
    
    "Aye! and once a hetman of the kozaki of the Zaporoskan River, as you have guessed. Would you like to live?"
    
    "Only a fool would ask that question," panted Conan.
    
    "I am a hard man," said Olgerd, "and toughness is the only quality I respect in a man. I shall judge if you are a man, or only a dog after all, fit only to lie here and die."
    
    "If we cut him down we may be seen from the walls," objected one of the nomads.
    
    Olgerd shook his head.
    
    "The dusk is deep. Here, take this ax, Djebal, and cut down the cross at the base."
    
    "If it falls forward it will crush him," objected Djebal. "I can cut it so it will fall backward, but then the shock of the fall may crack his skull and tear loose all his entrails."
    
    "If he's worthy to ride with me he'll survive it," answered Olgerd imperturbably. "If not, then he doesn't deserve to live. Cut!"
    
    The first impact of the battle-ax against the wood and its accompanying vibrations sent lances of agony through Conan's swollen feet and hands. Again and again the blade fell, and each stroke reverberated on his bruised brain, setting his tortured nerves aquiver. But he set his teeth and made no sound. The ax cut through, the cross reeled on its splintered base and toppled backward. Conan made his whole body a solid knot of iron-hard muscle, jammed his head back hard against the wood and held it rigid there. The beam struck the ground heavily and rebounded slightly. The impact tore his wounds and dazed him for an instant. He fought the rushing tide of blackness, sick and dizzy, but realized that the iron muscles that sheathed his vitals had saved him from permanent injury.
    
    And he had made no sound, though blood oozed from his nostrils and his belly-muscles quivered with nausea. With a grunt of approval Djebal bent over him with a pair of pincers used to draw horse-shoe nails, and gripped the head of the spike in Conan's right hand, tearing the skin to get a grip on the deeply embedded head. The pincers were small for that work. Djebal sweated and tugged, swearing and wrestling with the stubborn iron, working it back and forth—in swollen flesh as well as in wood. Blood started, oozing over the Cimmerian's fingers. He lay so still he might have been dead, except for the spasmodic rise and fall of his great chest. The spike gave way, and Djebal held up the blood-stained thing with a grunt of satisfaction, then flung it away and bent over the other.
    
    The process was repeated, and then Djebal turned his attention to Conan's skewered feet. But the Cimmerian, struggling up to a sitting posture, wrenched the pincers from his fingers and sent him staggering backward with a violent shove. Conan's hands were swollen to almost twice their normal size. His fingers felt like misshapen thumbs, and closing his hands was an agony that brought blood streaming from under his grinding teeth. But somehow, clutching the pincers clumsily with both hands, he managed to wrench out first one spike and then the other. They were not driven so deeply into the wood as the others had been.
    
    He rose stiffly and stood upright on his swollen, lacerated feet, swaying drunkenly, the icy sweat dripping from his face and body. Cramps assailed him and he clamped his jaws against the desire to retch.
    
    Olgerd, watching him impersonally, motioned him toward the stolen horse. Conan stumbled toward it, and every step was a stabbing, throbbing hell that flecked his lips with bloody foam. One misshapen, groping hand fell clumsily on the saddle-bow, a bloody foot somehow found the stirrup. Setting his teeth, he swung up, and he almost fainted in midair; but he came down in the saddle—and as he did so, Olgerd struck the horse sharply with his whip. The startled beast reared, and the man in the saddle swayed and slumped like a sack of sand, almost unseated. Conan had wrapped a rein about each hand, holding it in place with a clamping thumb. Drunkenly he exerted the strength of his knotted biceps, wrenching the horse down; it screamed, its jaw almost dislocated.
    
    One of the Shemites lifted a water-flask questioningly.
    
    Olgerd shook his head.
    
    "Let him wait until we get to camp. It's only ten miles. If he's fit to live in the desert he'll live that long without a drink."
    
    The group rode like swift ghosts toward the river; among them Conan swayed like a drunken man in the saddle, bloodshot eyes glazed, foam drying on his blackened lips.
    
    3. — A LETTER TO NEMEDIA
    THE savant Astreas, traveling in the East in his never-tiring search for knowledge, wrote a letter to his friend and fellow philosopher Alcemides, in his native Nemedia, which constitutes the entire knowledge of the Western nations concerning the events of that period in the East, always a hazy, half-mythical region in the minds of the Western folk.
    
    Astreas wrote, in part: "You can scarcely conceive, my dear old friend, of the conditions now existing in this tiny kingdom since Queen Taramis admitted Constantius and his mercenaries, an event which I briefly described in my last, hurried letter. Seven months have passed since then, during which time it seems as though the devil himself had been loosed in this unfortunate realm. Taramis seems to have gone quite mad; whereas formerly she was famed for her virtue, justice and tranquility, she is now notorious for qualities precisely opposite to those just enumerated. Her private life is a scandal—or perhaps 'private' is not the correct term, since the queen makes no attempt to conceal the debauchery of her court. She constantly indulges in the most infamous revelries, in which the unfortunate ladies of the court are forced to join, young married women as well as virgins."
    
    "She herself has not bothered to marry her paramour, Constantius, who sits on the throne beside her and reigns as her royal consort, and his officers follow his example, and do not hesitate to debauch any woman they desire, regardless of her rank or station. The wretched kingdom groans under exorbitant taxation, the farms are stripped to the bone, and the merchants go in rags which are all that is left them by the tax-gatherers. Nay, they are lucky if they escape with a whole skin.
    
    "I sense your incredulity, good Alcemides; you will fear that I exaggerate conditions in Khauran. Such conditions would be unthinkable in any of the Western countries, admittedly. But you must realize the vast difference that exists between West and East, especially this part of the East. In the first place, Khauran is a kingdom of no great size, one of the many principalities which at one time formed the eastern part of the empire of Koth, and which later regained the independence which was theirs at a still earlier age. This part of the world is made up of these tiny realms, diminutive in comparison with the great kingdoms of the West, or the great sultanates of the farther East, but important in their control of the caravan routes, and in the wealth concentrated in them."
    
    
    "KHAURAN is the most southeasterly of these principalities, bordering on the very deserts of eastern Shem. The city of Khauran is the only city of any magnitude in the realm, and stands within sight of the river which separates the grasslands from the sandy desert, like a watch-tower to guard the fertile meadows behind it. The land is so rich that it yields three and four crops a year, and the plains north and west of the city are dotted with villages. To one accustomed to the great plantations and stock-farms of the West, it is strange to see these tiny fields and vineyards; yet wealth in grain and fruit pours from them as from a horn of plenty. The villagers are agriculturists, nothing else. Of a mixed, aboriginal race, they are unwarlike, unable to protect themselves, and forbidden the possession of arms. Dependent wholly upon the soldiers of the city for protection, they are helpless under the present conditions. So the savage revolt of the rural sections, which would be a certainty in any Western nation, is here impossible.
    
    "They toil supinely under the iron hand of Constantius, and his black-bearded Shemites ride incessantly through the fields, with whips in their hands, like the slave-drivers of the black serfs who toil in the plantations of southern Zingara.
    
    "Nor do the people of the city fare any better. Their wealth is stripped from them, their fairest daughters taken to glut the insatiable lust of Constantius and his mercenaries. These men are utterly without mercy or compassion, possessed of all the characteristics our armies learned to abhor in our wars against the Shemitish allies of Argos—inhuman cruelty, lust, and wild-beast ferocity. The people of the city are Khauran's ruling caste, predominantly Hyborian, and valorous and war-like. But the treachery of their queen delivered them into the hands of their oppressors. The Shemites are the only armed force in Khauran, and the most hellish punishment is inflicted on any Khaurani found possessing weapons. A systematic persecution to destroy the young Khaurani men able to bear arms has been savagely pursued. Many have ruthlessly been slaughtered, others sold as slaves to the Turanians. Thousands have fled the kingdom and either entered the service of other rulers, or become outlaws, lurking in numerous bands along the borders.
    
    "At present there is some possibility of invasion from the desert, which is inhabited by tribes of Shemitish nomads. The mercenaries of Constantius are men from the Shemitish cities of the west, Pelishtim, Anakim, Akkharim, and are ardently hated by the Zuagirs and other wandering tribes. As you know, good Alcemides, the countries of these barbarians are divided into the western meadowlands which stretch to the distant ocean, and in which rise the cities of the town-dwellers, and the eastern deserts, where the lean nomads hold sway; there is incessant warfare between the dwellers of the cities and the dwellers of the desert.
    
    "The Zuagirs have fought with and raided Khauran for centuries, without success, but they resent its conquest by their western kin. It is rumored that their natural antagonism is being fomented by the man who was formerly the captain of the queen's guard, and who, somehow escaping the hate of Constantius, who actually had him upon the cross, fled to the nomads. He is called Conan, and is himself a barbarian, one of those gloomy Cimmerians whose ferocity our soldiers have more than once learned to their bitter cost. It is rumored that he has become the right-hand man of Olgerd Vladislav, the kozak adventurer who wandered down from the northern steppes and made himself chief of a band of Zuagirs. There are also rumors that this band has increased vastly in the last few months, and that Olgerd, incited no doubt by this Cimmerian, is even considering a raid on Khauran.
    
    "It can not be anything more than a raid, as the Zuagirs are without siege-machines, or the knowledge of investing a city, and it has been proven repeatedly in the past that the nomads in their loose formation, or rather lack of formation, are no match in hand-to-hand fighting for the well-disciplined, fully-armed warriors of the Shemitish cities. The natives of Khauran would perhaps welcome this conquest, since the nomads could deal with them no more harshly than their present masters, and even total extermination would be preferable to the suffering they have to endure. But they are so cowed and helpless that they could give no aid to the invaders.
    
    "Their plight is most wretched. Taramis, apparently possessed of a demon, stops at nothing. She has abolished the worship of Ishtar, and turned the temple into a shrine of idolatry. She has destroyed the ivory image of the goddess which these eastern Hyborians worship (and which, inferior as it is to the true religion of Mitra which we Western nations recognize, is still superior to the devil-worship of the Shemites) and filled the temple of Ishtar with obscene images of every imaginable sort—gods and goddesses of the night, portrayed in all the salacious and perverse poses and with all the revolting characteristics that a degenerate brain could conceive. Many of these images are to be identified as foul deities of the Shemites, the Turanians, the Vendhyans, and the Khitans, but others are reminiscent of a hideous and half-remembered antiquity, vile shapes forgotten except in the most obscure legends. Where the queen gained the knowledge of them I dare not even hazard a guess.
    
    "She has instituted human sacrifice, and since her mating with Constantius, no less then five hundred men, women and children have been immolated. Some of these have died on the altar she has set up in the temple, herself wielding the sacrificial dagger, but most have met a more horrible doom.
    
    "Taramis has placed some sort of monster in a crypt in the temple. What it is, and whence it came, none knows. But shortly after she had crushed the desperate revolt of her soldiers against Constantius, she spent a night alone in the desecrated temple, alone except for a dozen bound captives, and the shuddering people saw thick, foul-smelling smoke curling up from the dome, heard all night the frenetic chanting of the queen, and the agonized cries of her tortured captives; and toward dawn another voice mingled with these sounds—a strident, inhuman croaking that froze the blood of all who heard.
    
    "In the full dawn Taramis reeled drunkenly from the temple, her eyes blazing with demoniac triumph. The captives were never seen again, nor the croaking voice heard. But there is a room in the temple into which none ever goes but the queen, driving a human sacrifice before her. And this victim is never seen again. All know that in that grim chamber lurks some monster from the black night of ages, which devours the shrieking humans Taramis delivers up to it.
    
    
    "I CAN no longer think of her as a mortal woman, but as a rabid she-fiend, crouching in her blood-fouled lair amongst the bones and fragments of her victims, with taloned, crimsoned fingers. That the gods allow her to pursue her awful course unchecked almost shakes my faith in divine justice.
    
    "When I compare her present conduct with her deportment when first I came to Khauran, seven months ago, I am confused with bewilderment, and almost inclined to the belief held by many of the people—that a demon has possessed the body of Taramis. A young soldier, Valerius, had another belief. He believed that a witch had assumed a form identical with that of Khauran's adored ruler. He believed that Taramis had been spirited away in the night, and confined in some dungeon, and that this being ruling in her place was but a female sorcerer. He swore that he would find the real queen, if she still lived, but I greatly fear that he himself has fallen victim to the cruelty of Constantius. He was implicated in the revolt of the palace guards, escaped and remained in hiding for some time, stubbornly refusing to seek safety abroad, and it was during this time that I encountered him and he told me his beliefs.
    
    "But he has disappeared, as so many have, whose fate one dares not conjecture, and I fear he has been apprehended by the spies of Constantius.
    
    "But I must conclude this letter and slip it out of the city by means of a swift carrier-pigeon, which will carry it to the post whence I purchased it, on the borders of Koth. By rider and camel-train it will eventually come to you. I must haste, before dawn. It is late, and the stars gleam whitely on the gardened roofs of Khauran. A shuddering silence envelops the city, in which I hear the throb of a sullen drum from the distant temple. I doubt not that Taramis is there, concocting more devilry."
    
    * * *
    BUT the savant was incorrect in his conjecture concerning the whereabouts of the woman he called Taramis. The girl whom the world knew as queen of Khauran stood in a dungeon, lighted only by a flickering torch which played on her features, etching the diabolical cruelty of her beautiful countenance.
    
    On the bare stone floor before her crouched a figure whose nakedness was scarcely covered with tattered rags.
    
    This figure Salome touched contemptuously with the upturned toe of her gilded sandal, and smiled vindictively as her victim shrank away.
    
    "You do not love my caresses, sweet sister?"
    
    Taramis was still beautiful, in spite of her rags and the imprisonment and abuse of seven weary months. She did not reply to her sister's taunts, but bent her head as one grown accustomed to mockery.
    
    
    THIS resignation did not please Salome. She bit her red lip, and stood tapping the toe of her shoe against the floor as she frowned down at the passive figure. Salome was clad in the barbaric splendor of a woman of Shushan. Jewels glittered in the torchlight on her gilded sandals, on her gold breast-plates and the slender chains that held them in place. Gold anklets clashed as she moved, jeweled bracelets weighted her bare arms. Her tall coiffure was that of a Shemitish woman, and jade pendants hung from gold hoops in her ears, flashing and sparkling with each impatient movement of her haughty head. A gem-crusted girdle supported a silk skirt so transparent that it was in the nature of a cynical mockery of convention.
    
    Suspended from her shoulders and trailing down her back hung a darkly scarlet cloak, and this was thrown carelessly over the crook of one arm and the bundle that arm supported.
    
    Salome stooped suddenly and with her free hand grasped her sister's dishevelled hair and forced back the girl's head to stare into her eyes. Taramis met that tigerish glare without flinching.
    
    "You are not so ready with your tears as formerly, sweet sister," muttered the witch-girl.
    
    "You shall wring no more tears from me," answered Taramis. "Too often you have reveled in the spectacle of the queen of Khauran sobbing for mercy on her knees. I know that you have spared me only to torment me; that is why you have limited your tortures to such torments as neither slay nor permanently disfigure. But I fear you no longer; you have strained out the last vestige of hope, fright and shame from me. Slay me and be done with it, for I have shed my last tear for your enjoyment, you she-devil from hell!"
    
    "You flatter yourself, my dear sister," purred Salome. "So far it is only your handsome body that I have caused to suffer, only your pride and self-esteem that I have crushed. You forget that, unlike myself, you are capable of mental torment. I have observed this when I have regaled you with narratives concerning the comedies I have enacted with some of your stupid subjects. But this time I have brought more vivid proof of these farces. Did you know that Krallides, your faithful councillor, had come skulking back from Turan and been captured?"
    
    Taramis turned pale.
    
    "What—what have you done to him?"
    
    For answer Salome drew the mysterious bundle from under her cloak. She shook off the silken swathings and held it up; the head of a young man, the features frozen in a convulsion as if death had come in the midst of inhuman agony.
    
    Taramis cried out as if a blade had pierced her heart.
    
    "Oh, Ishtar! Krallides!"
    
    "Aye! He was seeking to stir up the people against me, poor fool, telling them that Conan spoke the truth when he said I was not Taramis. How would the people rise against the Falcon's Shemites? With sticks and pebbles? Bah! Dogs are eating his headless body in the market-place, and this foul carrion shall be cast into the sewer to rot.
    
    "How, sister!" She paused, smiling down at her victim. "Have you discovered that you still have unshed tears? Good! I reserved the mental torment for the last. Hereafter I shall show you many such sights as—this!"
    
    Standing there in the torchlight with the severed head in her hand she did not look like anything ever borne by a human woman, in spite of her awful beauty. Taramis did not look up. She lay face down on the slimy floor, her slim body shaken in sobs of agony, beating her clenched hands against the stones. Salome sauntered toward the door, her anklets clashing at each step, her ear pendants winking in the torch-glare.
    
    A few moments later she emerged from a door under a sullen arch that led into a court which in turn opened upon a winding alley. A man standing there turned toward her—a giant Shemite, with sombre eyes and shoulders like a bull, his great black beard falling over his mighty, silver-mailed breast.
    
    "She wept?" His rumble was like that of a bull, deep, low-pitched and stormy. He was the general of the mercenaries, one of the few even of Constantius's associates who knew the secret of the queens of Khauran.
    
    "Aye, Khumbanigash. There are whole sections of her sensibilities that I have not touched. When one sense is dulled by continual laceration, I will discover a newer, more poignant pang. Here, dog!" A trembling, shambling figure in rags, filth and matted hair approached, one of the beggars that slept in the alleys and open courts. Salome tossed the head to him. "Here, deaf one; cast that in the nearest sewer. Make the sign with your hands, Khumbanigash. He can not hear."
    
    The general complied, and the tousled head bobbed, as the man turned painfully away.
    
    "Why do you keep up this farce?" rumbled Khumbanigash. "You are so firmly established on the throne that nothing can unseat you. What if Khaurani fools learn the truth? They can do nothing. Proclaim yourself in your true identity! Show them their beloved ex-queen—and cut off her head in the public square!"
    
    "Not yet, good Khumbanigash—"
    
    The arched door slammed on the hard accents of Salome, the stormy reverberations of Khumbanigash. The mute beggar crouched in the courtyard, and there was none to see that the hands which held the severed head were quivering—strongly brown, sinewy hands, strangely incongruous with the bent body and filthy tatters.
    
    "I knew it!" It was a fierce, vibrant whisper, scarcely audible. "She lives! Oh, Krallides, your martyrdom was not in vain! They have her locked in that dungeon! Oh, Ishtar, if you love true men, aid me now!"
    
    4. — WOLVES OF THE DESERT
    OLGERD VLADISLAV filled his jeweled goblet with crimson wine from a golden jug and thrust the vessel across the ebony table to Conan the Cimmerian. Olgerd's apparel would have satisfied the vanity of any Zaporoskan hetman.
    
    His khalat was of white silk, with pearls sewn on the bosom. Girdled at the waist with a Bakhauriot belt, its skirts were drawn back to reveal his wide silken breeches, tucked into short boots of soft green leather, adorned with gold thread. On his head was a green silk turban, wound about a spired helmet chased with gold. His only weapon was a broad curved Cherkees knife in an ivory sheath girdled high on his left hip, kozak fashion. Throwing himself back in his gilded chair with its carven eagles, Olgerd spread his booted legs before him, and gulped down the sparkling wine noisily.
    
    To his splendor the huge Cimmerian opposite him offered a strong contrast, with his square-cut black mane, brown scarred countenance and burning blue eyes. He was clad in black mesh-mail, and the only glitter about him was the broad gold buckle of the belt which supported his sword in its worn leather scabbard.
    
    They were alone in the silk-walled tent, which was hung with gilt-worked tapestries and littered with rich carpets and velvet cushions, the loot of the caravans. From outside came a low, incessant murmur, the sound that always accompanies a great throng of men, in camp or otherwise. An occasional gust of desert wind rattled the palm-leaves.
    
    "Today in the shadow, tomorrow in the sun," quoth Olgerd, loosening his crimson girdle a trifle and reaching again for the wine-jug. "That's the way of life. Once I was a hetman on the Zaporoska; now I'm a desert chief. Seven months ago you were hanging on a cross outside Khauran. Now you're lieutenant to the most powerful raider between Turan and the western meadows. You should be thankful to me!"
    
    "For recognizing my usefulness?" Conan laughed and lifted the jug. "When you allow the elevation of a man, one can be sure that you'll profit by his advancement. I've earned everything I've won, with my blood and sweat." He glanced at the scars on the insides of his palms. There were scars, too, on his body, scars that had not been there seven months ago.
    
    "You fight like a regiment of devils," conceded Olgerd. "But don't get to thinking that you've had anything to do with the recruits who've swarmed in to join us. It was our success at raiding, guided by my wit, that brought them in. These nomads are always looking for a successful leader to follow, and they have more faith in a foreigner than in one of their own race.
    
    "There's no limit to what we may accomplish! We have eleven thousand men now. In another year we may have three times that number. We've contented ourselves, so far, with raids on the Turanian outposts and the city-states to the west. With thirty or forty thousand men we'll raid no longer. We'll invade and conquer and establish ourselves as rulers. I'll be emperor of all Shem yet, and you'll be my vizier, so long as you carry out my orders unquestioningly. In the meantime, I think we'll ride eastward and storm that Turanian outpost at Vezek, where the caravans pay toll."
    
    Conan shook his head. "I think not."
    
    Olgerd glared, his quick temper irritated.
    
    "What do you mean, you think not? I do the thinking for this army!"
    
    "There are enough men in this band now for my purpose," answered the Cimmerian. "I'm sick of waiting. I have a score to settle."
    
    "Oh!" Olgerd scowled, and gulped wine, then grinned. "Still thinking of that cross, eh? Well, I like a good hater. But that can wait."
    
    "You told me once you'd aid me in taking Khauran," said Conan.
    
    "Yes, but that was before I began to see the full possibilities of our power," answered Olgerd. "I was only thinking of the loot in the city. I don't want to waste our strength unprofitably. Khauran is too strong a nut for us to crack now. Maybe in a year—"
    
    "Within the week," answered Conan, and the kozak stared at the certainty in his voice.
    
    "Listen," said Olgerd, "even if I were willing to throw away men on such a hare-brained attempt—what could you expect? Do you think these wolves could besiege and take a city like Khauran?"
    
    "There'll be no siege," answered the Cimmerian. "I know how to draw Constantius out into the plain."
    
    "And what then?" cried Olgerd with an oath. "In the arrowplay our horsemen would have the worst of it, for the armor of the asshuri is the better, and when it came to sword-strokes their close-marshaled ranks of trained swordsmen would cleave through our loose lines and scatter our men like chaff before the wind."
    
    "Not if there were three thousand desperate Hyborian horsemen fighting in a solid wedge such as I could teach them," answered Conan.
    
    "And where would you secure three thousand Hyborians?" asked Olgerd with vast sarcasm. "Will you conjure them out of the air?"
    
    "I have them," answered the Cimmerian imperturbably. "Three thousand men of Khauran camp at the oasis of Akrel awaiting my orders."
    
    "What?" Olgerd glared like a startled wolf.
    
    "Aye. Men who had fled from the tyranny of Constantius. Most of them have been living the lives of outlaws in the deserts east of Khauran, and are gaunt and hard and desperate as man-eating tigers. One of them will be a match for any three squat mercenaries. It takes oppression and hardship to stiffen men's guts and put the fire of hell into their thews. They were broken up into small bands; all they needed was a leader. They believed the word I sent them by my riders, and assembled at the oasis and put themselves at my disposal."
    
    "All this without my knowledge?" A feral light began to gleam in Olgerd's eye. He hitched at his weapon-girdle.
    
    "It was I they wished to follow, not you."
    
    "And what did you tell these outcasts to gain their allegiance?" There was a dangerous ring in Olgerd's voice.
    
    "I told them that I'd use this horde of desert wolves to help them destroy Constantius and give Khauran back into the hands of its citizens."
    
    "You fool!" whispered Olgerd. "Do you deem yourself chief already?"
    
    The men were on their feet, facing each other across the ebony board, devil-lights dancing in Olgerd's cold gray eyes, a grim smile on the Cimmerian's hard lips.
    
    "I'll have you torn between four palm-trees," said the kozak calmly.
    
    "Call the men and bid them do it!" challenged Conan. "See if they obey you!"
    
    
    BARING his teeth in a snarl, Olgerd lifted his hand—then paused. There was something about the confidence in the Cimmerian's dark face that shook him. His eyes began to burn like those of a wolf.
    
    "You scum of the western hills," he muttered, "have you dared seek to undermine my power?"
    
    "I didn't have to," answered Conan. "You lied when you said I had nothing to do with bringing in the new recruits. I had everything to do with it. They took your orders, but they fought for me. There is not room for two chiefs of the Zuagirs. They know I am the stronger man. I understand them better than you, and they, me; because I am a barbarian too."
    
    "And what will they say when you ask them to fight for Khauran?" asked Olgerd sardonically.
    
    "They'll follow me. I'll promise them a camel-train of gold from the palace. Khauran will be willing to pay that as a guerdon for getting rid of Constantius. After that, I'll lead them against the Turanians as you have planned. They want loot, and they'd as soon fight Constantius for it as anybody."
    
    In Olgerd's eyes grew a recognition of defeat. In his red dreams of empire he had missed what was going on about him. Happenings and events that had seemed meaningless before now flashed into his mind, with their true significance, bringing a realization that Conan spoke no idle boast. The giant black-mailed figure before him was the real chief of the Zuagirs.
    
    "Not if you die!" muttered Olgerd, and his hand flickered toward his hilt. But quick as the stroke of a great cat, Conan's arm shot across the table and his fingers locked on Olgerd's forearm. There was a snap of breaking bones, and for a tense instant the scene held: the men facing each other as motionless as images, perspiration starting out on Olgerd's forehead. Conan laughed, never easing his grip on the broken arm.
    
    "Are you fit to live, Olgerd?"
    
    His smile did not alter as the corded muscles rippled in knotting ridges along his forearm and his fingers ground into the kozak's quivering flesh. There was the sound of broken bones grating together and Olgerd's face turned the color of ashes; blood oozed from his lip where his teeth sank, but he uttered no sound.
    
    With a laugh Conan released him and drew back, and the kozak swayed, caught the table edge with his good hand to steady himself.
    
    "I give you life, Olgerd, as you gave it to me," said Conan tranquilly, "though it was for your own ends that you took me down from the cross. It was a bitter test you gave me then; you couldn't have endured it; neither could anyone, but a western barbarian.
    
    "Take your horse and go. It's tied behind the tent, and food and water are in the saddle-bags. None will see your going, but go quickly. There's no room for a fallen chief on the desert. If the warriors see you, maimed and deposed, they'll never let you leave the camp alive."
    
    Olgerd did not reply. Slowly, without a word, he turned and stalked across the tent, through the flapped opening. Unspeaking he climbed into the saddle of the great white stallion that stood tethered there in the shade of a spreading palm-tree; and unspeaking, with his broken arm thrust in the bosom of his khalat, he reined the steed about and rode eastward into the open desert, out of the life of the people of the Zuagir.
    
    Inside the tent Conan emptied the wine-jug and smacked his lips with relish. Tossing the empty vessel into a corner, he braced his belt and strode out through the front opening, halting for a moment to let his gaze sweep over the lines of camel-hair tents that stretched before him, and the white-robed figures that moved among them, arguing, singing, mending bridles or whetting tulwars.
    
    He lifted his voice in a thunder that carried to the farthest confines of the encampment: "Aie, you dogs, sharpen your ears and listen! Gather around here. I have a tale to tell you."
    
    5. — THE VOICE FROM THE CRYSTAL
    IN a chamber in a tower near the city wall a group of men listened attentively to the words of one of their number. They were young men, but hard and sinewy, with a bearing that comes only to men rendered desperate by adversity. They were clad in mail shirts and worn leather; swords hung at their girdles.
    
    "I knew that Conan spoke the truth when he said it was not Taramis!" the speaker exclaimed. "For months I have haunted the outskirts of the palace, playing the part of a deaf beggar. At last I learned what I had believed—that our queen was a prisoner in the dungeons that adjoin the palace. I watched my opportunity and captured a Shemitish jailer—knocked him senseless as he left the courtyard late one night—dragged him into a cellar near by and questioned him. Before he died he told me what I have just told you, and what we have suspected all along—that the woman ruling Khauran is a witch: Salome. Taramis, he said, is imprisoned in the lowest dungeon.
    
    "This invasion of the Zuagirs gives us the opportunity we sought. What Conan means to do, I can not say. Perhaps he merely wishes vengeance on Constantius. Perhaps he intends sacking the city and destroying it. He is a barbarian and no one can understand their minds.
    
    "But this is what we must do: rescue Taramis while the battle rages! Constantius will march out into the plain to give battle. Even now his men are mounting. He will do this because there is not sufficient food in the city to stand a siege. Conan burst out of the desert so suddenly that there was no time to bring in supplies. And the Cimmerian is equipped for a siege. Scouts have reported that the Zuagirs have siege engines, built, undoubtedly, according to the instructions of Conan, who learned all the arts of war among the Western nations.
    
    "Constantius does not desire a long siege; so he will march with his warriors into the plain, where he expects to scatter Conan's forces at one stroke. He will leave only a few hundred men in the city, and they will be on the walls and in the towers commanding the gates.
    
    "The prison will be left all but unguarded. When we have freed Taramis our next actions will depend upon circumstances. If Conan wins, we must show Taramis to the people and bid them rise—they will! Oh, they will! With their bare hands they are enough to overpower the Shemites left in the city and close the gates against both the mercenaries and the nomads. Neither must get within the walls! Then we will parley with Conan. He was always loyal to Taramis. If he knows the truth, and she appeals to him, I believe he will spare the city. If, which is more probable, Constantius prevails, and Conan is routed, we must steal out of the city with the queen and seek safety in flight.
    
    "Is all clear?"
    
    They replied with one voice.
    
    "Then let us loosen our blades in our scabbards, commend our souls to Ishtar, and start for the prison, for the mercenaries are already marching through the southern gate."
    
    * * *
    
    This was true. The dawnlight glinted on peaked helmets pouring in a steady stream through the broad arch, on the bright housings of the chargers. This would be a battle of horsemen, such as is possible only in the lands of the East. The riders flowed through the gates like a river of steel—sombre figures in black and silver mail, with their curled beards and hooked noses, and their inexorable eyes in which glimmered the fatality of their race—the utter lack of doubt or of mercy.
    
    The streets and the walls were lined with throngs of people who watched silently these warriors of an alien race riding forth to defend their native city. There was no sound; dully, expressionless they watched, those gaunt people in shabby garments, their caps in their hands.
    
    
    IN a tower that overlooked the broad street that led to the southern gate, Salome lolled on a velvet couch, cynically watching Constantius as he settled his broad sword-belt about his lean hips and drew on his gauntlets. They were alone in the chamber. Outside, the rhythmical clank of harness and shuffle of horses' hoofs welled up through the gold-barred casements.
    
    "Before nightfall," quoth Constantius, giving a twirl to his thin mustache, "you'll have some captives to feed to your temple devil. Does it not grow weary of soft, city-bred flesh? Perhaps it would relish the harder thews of a desert man."
    
    "Take care you do not fall prey to a fiercer beast than Thaug," warned the girl. "Do not forget who it is that leads these desert animals."
    
    "I am not likely to forget," he answered. "That is one reason why I am advancing to meet him. The dog has fought in the West and knows the art of siege. My scouts had some trouble in approaching his columns, for his outriders have eyes like hawks; but they did get close enough to see the engines he is dragging on ox-cart wheels drawn by camels—catapults, rams, ballistas, mangonels—by Ishtar! he must have had ten thousand men working day and night for a month. Where he got the material for their construction is more than I can understand. Perhaps he has a treaty with the Turanians, and gets supplies from them.
    
    "Anyway, they won't do him any good. I've fought these desert wolves before—an exchange of arrows for awhile, in which the armor of my warriors protects them—then a charge and my squadrons sweep through the loose swarms of the nomads, wheel and sweep back through, scattering them to the four winds. I'll ride back through the south gate before sunset, with hundreds of naked captives staggering at my horse's tail. We'll hold a fete tonight, in the great square. My soldiers delight in flaying their enemies alive—we will have a wholesale skinning, and make these weak-kneed townsfolk watch. As for Conan, it will afford me intense pleasure, if we take him alive, to impale him on the palace steps."
    
    "Skin as many as you like," answered Salome indifferently. "I would like a dress made of human hide. But at least a hundred captives you must give to me—for the altar, and for Thaug."
    
    "It shall be done," answered Constantius, with his gauntleted hand brushing back the thin hair from his high bald forehead, burned dark by the sun. "For victory and the fair honor of Taramis!" he said sardonically, and, taking his vizored helmet under his arm, he lifted a hand in salute, and strode clanking from the chamber. His voice drifted back, harshly lifted in orders to his officers.
    
    Salome leaned back on the couch, yawned, stretched herself like a great supple cat, and called: "Zang!"
    
    A cat-footed priest, with features like yellowed parchment stretched over a skull, entered noiselessly.
    
    Salome turned to an ivory pedestal on which stood two crystal globes, and taking from it the smaller, she handed the glistening sphere to the priest.
    
    "Ride with Constantius," she said. "Give me the news of the battle. Go!"
    
    The skull-faced man bowed low, and hiding the globe under his dark mantle, hurried from the chamber.
    
    Outside in the city there was no sound, except the clank of hoofs and after a while the clang of a closing gate. Salome mounted a wide marble stair that led to the flat, canopied, marble-battlemented roof. She was above all other buildings in the city. The streets were deserted, the great square in front of the palace was empty. In normal times folk shunned the grim temple which rose on the opposite side of that square, but now the town looked like a dead city. Only on the southern wall and the roofs that overlooked it was there any sign of life. There the people massed thickly. They made no demonstration, did not know whether to hope for the victory or defeat of Constantius. Victory meant further misery under his intolerable rule; defeat probably meant the sack of the city and red massacre. No word had come from Conan. They did not know what to expect at his hands. They remembered that he was a barbarian.
    
    
    THE squadrons of the mercenaries were moving out into the plain. In the distance, just this side of the river, other dark masses were moving, barely recognizable as men on horses. Objects dotted the farther bank; Conan had not brought his siege engines across the river, apparently fearing an attack in the midst of the crossing. But he had crossed with his full force of horsemen. The sun rose and struck glints of fire from the dark multitudes. The squadrons from the city broke into a gallop; a deep roar reached the ears of the people on the wall.
    
    The rolling masses merged, intermingled; at that distance it was a tangled confusion in which no details stood out. Charge and countercharge were not to be identified. Clouds of dust rose from the plains, under the stamping hoofs, veiling the action. Through these swirling clouds masses of riders loomed, appearing and disappearing, and spears flashed.
    
    Salome shrugged her shoulders and descended the stair. The palace lay silent. All the slaves were on the wall, gazing vainly southward with the citizens.
    
    She entered the chamber where she had talked with Constantius, and approached the pedestal, noting that the crystal globe was clouded, shot with bloody streaks of crimson. She bent over the ball, swearing under her breath.
    
    "Zang!" she called. "Zang!"
    
    Mists swirled in the sphere, resolving themselves into billowing dust-clouds through which black figures rushed unrecognizably; steel glinted like lightning in the murk. Then the face of Zang leaped into startling distinctness; it was as if the wide eyes gazed up at Salome. Blood trickled from a gash in the skull-like head, the skin was gray with sweat-runneled dust. The lips parted, writhing; to other ears than Salome's it would have seemed that the face in the crystal contorted silently. But sound to her came as plainly from those ashen lips as if the priest had been in the same room with her, instead of miles away, shouting into the smaller crystal. Only the gods of darkness knew what unseen, magic filaments linked together those shimmering spheres.
    
    "Salome!" shrieked the bloody head. "Salome!"
    
    "I hear!" she cried. "Speak! How goes the battle?"
    
    "Doom is upon us!" screamed the skull-like apparition. "Khauran is lost! Aie, my horse is down and I can not win clear! Men are falling around me! They are dying like flies, in their silvered mail!"
    
    "Stop yammering and tell me what happened!" she cried harshly.
    
    "We rode at the desert-dogs and they came on to meet us!" yowled the priest. "Arrows flew in clouds between the hosts, and the nomads wavered. Constantius ordered the charge. In even ranks we thundered upon them.
    
    "Then the masses of their horde opened to right and left, and through the cleft rushed three thousand Hyborian horsemen whose presence we had not even suspected. Men of Khauran, mad with hate! Big men in full armor on massive horses! In a solid wedge of steel they smote us like a thunderbolt. They split our ranks asunder before we knew what was upon us, and then the desert-men swarmed on us from either flank.
    
    "They have ripped our ranks apart, broken and scattered us! It is a trick of that devil Conan! The siege engines are false—mere frames of palm trunks and painted silk, that fooled our scouts who saw them from afar. A trick to draw us out to our doom! Our warriors flee! Khumbanigash is down—Conan slew him. I do not see Constantius. The Khaurani rage through our milling masses like blood-mad lions, and the desert-men feather us with arrows. I—ahh!"
    
    There was a flicker as of lightning, or trenchant steel, a burst of bright blood—then abruptly the image vanished, like a bursting bubble, and Salome was staring into an empty crystal ball that mirrored only her own furious features.
    
    She stood perfectly still for a few moments, erect and staring into space. Then she clapped her hands and another skull-like priest entered, as silent and immobile as the first.
    
    "Constantius is beaten," she said swiftly. "We are doomed. Conan will be crashing at our gates within the hour. If he catches me, I have no illusions as to what I can expect. But first I am going to make sure that my cursed sister never ascends the throne again. Follow me! Come what may, we shall give Thaug a feast."
    
    As she descended the stairs and galleries of the palace, she heard a faint rising echo from the distant walls. The people there had begun to realize that the battle was going against Constantius. Through the dust clouds masses of horsemen were visible, racing toward the city.
    
    Palace and prison were connected by a long closed gallery, whose vaulted roof rose on gloomy arches. Hurrying along this, the false queen and her slave passed through a heavy door at the other end that let them into the dim-lit recesses of the prison. They had emerged into a wide, arched corridor at a point near where a stone stair descended into the darkness. Salome recoiled suddenly, swearing. In the gloom of the hall lay a motionless form—a Shemitish jailer, his short beard tilted toward the roof as his head hung on a half-severed neck. As panting voices from below reached the girl's ears, she shrank back into the black shadow of an arch, pushing the priest behind her, her hand groping in her girdle.
    
    6. — THE VULTURE'S WINGS
    IT was the smoky light of a torch which roused Taramis, Queen of Khauran, from the slumber in which she sought forgetfulness. Lifting herself on her hand she raked back her tangled hair and blinked up, expecting to meet the mocking countenance of Salome, malign with new torments. Instead a cry of pity and horror reached her ears.
    
    "Taramis! Oh, my Queen!"
    
    The sound was so strange to her ears that she thought she was still dreaming. Behind the torch she could make out figures now, the glint of steel, then five countenances bent toward her, not swarthy and hook-nosed, but lean, aquiline faces, browned by the sun. She crouched in her tatters, staring wildly.
    
    One of the figures sprang forward and fell on one knee before her, arms stretched appealingly toward her.
    
    "Oh, Taramis! Thank Ishtar we have found you! Do you not remember me, Valerius? Once with your own lips you praised me, after the battle of Korveka!"
    
    "Valerius!" she stammered. Suddenly tears welled into her eyes. "Oh, I dream! It is some magic of Salome's to torment me!"
    
    "No!" The cry rang with exultation. "It is your own true vassals come to rescue you! Yet we must hasten. Constantius fights in the plain against Conan, who has brought the Zuagirs across the river, but three hundred Shemites yet hold the city. We slew the jailer and took his keys, and have seen no other guards. But we must be gone. Come!"
    
    The queen's legs gave way, not from weakness but from the reaction. Valerius lifted her like a child, and with the torchbearer hurrying before them, they left the dungeon and went up a slimy stone stair. It seemed to mount endlessly, but presently they emerged into a corridor.
    
    They were passing a dark arch when the torch was suddenly struck out, and the bearer cried out in fierce, brief agony. A burst of blue fire glared in the dark corridor, in which the furious face of Salome was limned momentarily, with a beastlike figure crouching beside her—then the eyes of the watchers were blinded by that blaze.
    
    Valerius tried to stagger along the corridor with the queen; dazedly he heard the sound of murderous blows driven deep in flesh, accompanied by gasps of death and a bestial grunting. Then the queen was torn brutally from his arms, and a savage blow on his helmet dashed him to the floor.
    
    Grimly he crawled to his feet, shaking his head in an effort to rid himself of the blue flame which seemed still to dance devilishly before him. When his blinded sight cleared, he found himself alone in the corridor—alone except for the dead. His four companions lay in their blood, heads and bosoms cleft and gashed. Blinded and dazed in that hell-born glare, they had died without an opportunity of defending themselves. The queen was gone.
    
    With a bitter curse Valerius caught up his sword, tearing his cleft helmet from his head to clatter on the flags; blood ran down his cheek from a cut in his scalp.
    
    Reeling, frantic with indecision, he heard a voice calling his name in desperate urgency: "Valerius! Valerius!"
    
    He staggered in the direction of the voice, and rounded a corner just in time to have his arms filled with a soft, supple figure which flung itself frantically at him.
    
    "Ivga! Are you mad!"
    
    "I had to come!" she sobbed. "I followed you—hid in an arch of the outer court. A moment ago I saw her emerge with a brute who carried a woman in his arms. I knew it was Taramis, and that you had failed! Oh, you are hurt!"
    
    "A scratch!" He put aside her clinging hands. "Quick, Ivga, tell me which way they went!"
    
    "They fled across the square toward the temple."
    
    He paled. "Ishtar! Oh, the fiend! She means to give Taramis to the devil she worships! Quick, Ivga! Run to the south wall where the people watch the battle! Tell them that their real queen has been found—that the impostor has dragged her to the temple! Go!"
    
    Sobbing, the girl sped away, her light sandals pattering on the cobblestones, and Valerius raced across the court, plunged into the street, dashed into the square upon which it debouched, and raced for the great structure that rose on the opposite side.
    
    His flying feet spurned the marble as he darted up the broad stair and through the pillared portico. Evidently their prisoner had given them some trouble. Taramis, sensing the doom intended for her, was fighting against it with all the strength of her splendid young body. Once she had broken away from the brutish priest, only to be dragged down again.
    
    
    THE group was halfway down the broad nave, at the other end of which stood the grim altar and beyond that the great metal door, obscenely carven, through which many had gone, but from which only Salome had ever emerged. Taramis's breath came in panting gasps; her tattered garment had been torn from her in the struggle. She writhed in the grasp of her apish captor like a white, naked nymph in the arms of a satyr. Salome watched cynically, though impatiently, moving toward the carven door, and from the dusk that lurked along the lofty walls the obscene gods and gargoyles leered down, as if imbued with salacious life.
    
    Choking with fury, Valerius rushed down the great hall, sword in hand. At a sharp cry from Salome, the skull-faced priest looked up, then released Taramis, drew a heavy knife, already smeared with blood, and ran at the oncoming Khaurani.
    
    But cutting down men blinded by the devil's-flame loosed by Salome was different from fighting a wiry young Hyborian afire with hate and rage.
    
    Up went the dripping knife, but before it could fall Valerius's keen narrow blade slashed through the air, and the fist that held the knife jumped from its wrist in a shower of blood. Valerius, berserk, slashed again and yet again before the crumpling figure could fall. The blade licked through flesh and bone. The skull-like head fell one way, the half-sundered torso the other.
    
    Valerius whirled on his toes, quick and fierce as a jungle-cat, glaring about for Salome. She must have exhausted her fire-dust in the prison. She was bending over Taramis, grasping her sister's black locks in one hand, in the other lifting a dagger. Then with a fierce cry Valerius's sword was sheathed in her breast with such fury that the point sprang out between her shoulders. With an awful shriek the witch sank down, writhing in convulsions, grasping at the naked blade as it was withdrawn, smoking and dripping. Her eyes were inhuman; with a more than human vitality she clung to the life that ebbed through the wound that split the crimson crescent on her ivory bosom. She groveled on the floor, clawing and biting at the naked stones in her agony.
    
    Sickened at the sight, Valerius stooped and lifted the half-fainting queen. Turning his back on the twisting figure on the floor, he ran toward the door, stumbling in his haste. He staggered out upon the portico, halted at the head of the steps. The square thronged with people. Some had come at Ivga's incoherent cries; others had deserted the walls in fear of the onsweeping hordes out of the desert, fleeing unreasoningly toward the centre of the city. Dumb resignation had vanished. The throng seethed and milled, yelling and screaming. About the road there sounded somewhere the splintering of stone and timbers.
    
    A band of grim Shemites cleft the crowd—the guards of the northern gates, hurrying toward the south gate to reinforce their comrades there. They reined up short at the sight of the youth on the steps, holding the limp, naked figure in his arms. The heads of the throng turned toward the temple; the crowd gaped, a new bewilderment added to their swirling confusion.
    
    "Here is your queen!" yelled Valerius, straining to make himself understood above the clamor. The people gave back a bewildered roar. They did not understand, and Valerius sought in vain to lift his voice above their bedlam. The Shemites rode toward the temple steps, beating a way through the crowd with their spears.
    
    Then a new, grisly element introduced itself into the frenzy. Out of the gloom of the temple behind Valerius wavered a slim white figure, laced with crimson. The people screamed; there in the arms of Valerius hung the woman they thought their queen; yet there in the temple door staggered another figure, like a reflection of the other. Their brains reeled. Valerius felt his blood congeal as he stared at the swaying witch-girl. His sword had transfixed her, sundered her heart. She should be dead; by all laws of nature she should be dead. Yet there she swayed, on her feet, clinging horribly to life.
    
    "Thaug!" she screamed, reeling in the doorway. "Thaug!" As if in answer to that frightful invocation, there boomed a thunderous croaking from within the temple, and the snapping of wood and metal.
    
    "That is the queen!" roared the captain of the Shemites, lifting his bow. "Shoot down the man and other woman!"
    
    But the roar of a roused hunting-pack rose from the people; they had guessed the truth at last, understood Valerius's frenzied appeals, knew that the girl who hung limply in his arms was their true queen. With a soul-shaking yell they surged on the Shemites, tearing and smiting with tooth and nail and naked hands, with the desperation of hard-pent fury loosed at last. Above them Salome swayed and tumbled down the marble stairs, dead at last.
    
    
    ARROWS flickered about him as Valerius ran back between the pillars of the portico, shielding the body of the queen with his own. Shooting and slashing ruthlessly, the mounted Shemites were holding their own with the maddened crowd. Valerius darted to the temple door—with one foot on the threshold he recoiled, crying out in horror and despair.
    
    Out of the gloom at the other end of the great hall a vast dark form heaved up—came rushing toward him in gigantic frog-like hops. He saw the gleam of great unearthly eyes, the shimmer of fangs or talons. He fell back from the door, and then the whir of a shaft past his ear warned him that death was also behind him. He wheeled desperately. Four or five Shemites had cut their way through the throng and were spurring their horses up the steps, their bows lifted to shoot him down. He sprang behind a pillar, on which the arrows splintered. Taramis had fainted. She hung like a dead woman in his arms.
    
    Before the Shemites could loose again, the doorway was blocked by a gigantic shape. With affrighted yells the mercenaries wheeled and began beating a frantic way through the throng, which crushed back in sudden, galvanized horror, trampling one another in their stampede.
    
    But the monster seemed to be watching Valerius and the girl. Squeezing its vast, unstable bulk through the door, it bounded toward him, as he ran down the steps. He felt it looming behind him, a giant shadowy thing, like a travesty of nature cut out of the heart of night, a black shapelessness in which only the staring eyes and gleaming fangs were distinct.
    
    There came a sudden thunder of hoofs; a rout of Shemites, bloody and battered, streamed across the square from the south, plowing blindly through the packed throng. Behind them swept a horde of horsemen yelling in a familiar tongue, waving red swords—the exiles, returned! With them rode fifty black-bearded desert-riders, and at their head a giant figure in black mail.
    
    "Conan!" shrieked Valerius. "Conan!"
    
    The giant yelled a command. Without checking their headlong pace, the desert men lifted their bows, drew and loosed. A cloud of arrows sang across the square, over the seething heads of the multitudes, and sank feather-deep in the black monster. It halted, wavered, reared, a black blot against the marble pillars. Again the sharp cloud sang, and yet again, and the horror collapsed and rolled down the steps, as dead as the witch who had summoned it out of the night of ages.
    
    Conan drew rein beside the portico, leaped off. Valerius had laid the queen on the marble, sinking beside her in utter exhaustion. The people surged about, crowding in. The Cimmerian cursed them back, lifted her dark head, pillowed it against his mailed shoulder.
    
    "By Crom, what is this? The real Taramis! But who is that yonder?"
    
    "The demon who wore her shape," panted Valerius.
    
    Conan swore heartily. Ripping a cloak from the shoulders of a soldier, he wrapped it about the naked queen. Her long dark lashes quivered on her cheeks; her eyes opened, stared up unbelievingly into the Cimmerian's scarred face.
    
    "Conan!" Her soft fingers caught at him. "Do I dream? She told me you were dead—'
    
    "Scarcely!" He grinned hardly. "You do not dream. You are Queen of Khauran again. I broke Constantius, out there by the river. Most of his dogs never lived to reach the walls, for I gave orders that no prisoners be taken—except Constantius. The city guard closed the gate in our faces, but we burst in with rams swung from our saddles. I left all my wolves outside, except this fifty. I didn't trust them in here, and these Khaurani lads were enough for the gate guards."
    
    "It has been a nightmare!" she whimpered. "Oh, my poor people! You must help me try to repay them for all they have suffered, Conan, henceforth councilor as well as captain!"
    
    Conan laughed, but shook his head. Rising, he set the queen upon her feet, and beckoned to a number of his Khaurani horsemen who had not continued the pursuit of the fleeing Shemites. They sprang from their horses, eager to do the bidding of their new-found queen.
    
    "No, lass, that's over with. I'm chief of the Zuagirs now, and must lead them to plunder the Turanians, as I promised. This lad, Valerius, will make you a better captain than I. I wasn't made to dwell among marble walls, anyway. But I must leave you now, and complete what I've begun. Shemites still live in Khauran."
    
    As Valerius started to follow Taramis across the square towards the palace, through a lane opened by the wildly cheering multitude, he felt a soft hand slipped timidly into his sinewy fingers and turned to receive the slender body of Ivga in his arms. He crushed her to him and drank her kisses with the gratitude of a weary fighter who has attained rest at last through tribulation and storm.
    
    But not all men seek rest and peace; some are born with the spirit of the storm in their blood, restless harbingers of violence and bloodshed, knowing no other path...
    
    
    THE sun was rising. The ancient caravan road was thronged with white-robed horsemen, in a wavering line that stretched from the walls of Khauran to a spot far out in the plain. Conan the Cimmerian sat at the head of that column, near the jagged end of a wooden beam that stuck up out of the ground. Near that stump rose a heavy cross, and on that cross a man hung by spikes through his hands and feet.
    
    "Seven months ago, Constantius," said Conan, "it was I who hung there, and you who sat here."
    
    Constantius did not reply; he licked his gray lips and his eyes were glassy with pain and fear. Muscles writhed like cords along his lean body.
    
    "You are more fit to inflict torture than to endure it," said Conan tranquilly. "I hung there on a cross as you are hanging, and I lived, thanks to circumstances and a stamina peculiar to barbarians. But you civilized men are soft; your lives are not nailed to your spines as are ours. Your fortitude consists mainly in inflicting torment, not in enduring it. You will be dead before sundown. And so, Falcon of the desert, I leave you to the companionship of another bird of the desert."
    
    He gestured toward the vultures whose shadows swept across the sands as they wheeled overhead. From the lips of Constantius came an inhuman cry of despair and horror.
    
    Conan lifted his reins and rode toward the river that shone like silver in the morning sun. Behind him the white-clad riders struck into a trot; the gaze of each, as he passed a certain spot, turned impersonally and with the desert man's lack of compassion, toward the cross and the gaunt figure that hung there, black against the sunrise. Their horses' hoofs beat out a knell in the dust. Lower and lower swept the wings of the hungry vultures.`,
    genre: "Fantasy",
  },
  {
    user: "60c025182524913ea661432e",
    title: "The Duplicity of Hargraves",
    text: `When Major Pendleton Talbot, of Mobile, sir, and his daughter, Miss Lydia Talbot, came to Washington to reside, they selected for a boarding place a house that stood fifty yards back from one of the quietest avenues. It was an old-fashioned brick building, with a portico upheld by tall white pillars. The yard was shaded by stately locusts and elms, and a catalpa tree in season rained its pink and white blossoms upon the grass. Rows of high box bushes lined the fence and walks. It was the Southern style and aspect of the place that pleased the eyes of the Talbots.

    In this pleasant, private boarding house they engaged rooms, including a study for Major Talbot, who was adding the finishing chapters to his book, "Anecdotes and Reminiscences of the Alabama Army, Bench, and Bar."
    
    Major Talbot was of the old, old South. The present day had little interest or excellence in his eyes. His mind lived in that period before the Civil War, when the Talbots owned thousands of acres of fine cotton land and the slaves to till them; when the family mansion was the scene of princely hospitality, and drew its guests from the aristocracy of the South. Out of that period he had brought all its old pride and scruples of honour, an antiquated and punctilious politeness, and (you would think) its wardrobe.
    
    
     
    Such clothes were surely never made within fifty years. The major was tall, but whenever he made that wonderful, archaic genuflexion he called a bow, the corners of his frock coat swept the floor. That garment was a surprise even to Washington, which has long ago ceased to shy at the frocks and broadbrimmed hats of Southern congressmen. One of the boarders christened it a "Father Hubbard," and it certainly was high in the waist and full in the skirt.
    
    But the major, with all his queer clothes, his immense area of plaited, ravelling shirt bosom, and the little black string tie with the bow always slipping on one side, both was smiled at and liked in Mrs. Vardeman' s select boarding house. Some of the young department clerks would often "string him," as they called it, getting him started upon the subject dearest to him -- the traditions and history of his beloved Southland. During his talks he would quote freely from the "Anecdotes and Reminiscences." But they were very careful not to let him see their designs, for in spite of his sixty-eight years, he could make the boldest of them uncomfortable under the steady regard of his piercing gray eyes.
    
    Miss Lydia was a plump, little old maid of thirty-five, with smoothly drawn, tightly twisted hair that made her look still older. Old fashioned, too, she was; but ante-bellum glory did not radiate from her as it did from the major. She possessed a thrifty common sense; and it was she who handled the finances of the family, and met all comers when there were bills to pay. The major regarded board bills and wash bills as contemptible nuisances. They kept coming in so persistently and so often. Why, the major wanted to know, could they not be filed and paid in a lump sum at some convenient period -- say when the "Anecdotes and Reminiscences" had been published and paid for? Miss Lydia would calmly go on with her sewing and say, "We'll pay as we go as long as the money lasts, and then perhaps they'll have to lump it."
    
    
     
    Most of Mrs. Vardeman's boarders were away during the day, being nearly all department clerks and business men; but there was one of them who was about the house a great deal from morning to night. This was a young man named Henry Hopkins Hargraves -- every one in the house addressed him by his full name -- who was engaged at one of the popular vaudeville theatres. Vaudeville has risen to such a respectable plane in the last few years, and Mr. Hargraves was such a modest and well-mannered person, that Mrs. Vardeman could find no objection to enrolling him upon her list of boarders.
    
    At the theatre Hargraves was known as an all-round dialect comedian, having a large repertoire of German, Irish, Swede, and black-face specialties. But Mr. Hargraves was ambitious, and often spoke of his great desire to succeed in legitimate comedy.
    
    This young man appeared to conceive a strong fancy for Major Talbot. Whenever that gentleman would begin his Southern reminiscences, or repeat some of the liveliest of the anecdotes, Hargraves could always be found, the most attentive among his listeners.
    
    For a time the major showed an inclination to discourage the advances of the "play actor," as he privately termed him; but soon the young man's agreeable manner and indubitable appreciation of the old gentleman's stories completely won him over.
    
    It was not long before the two were like old chums. The major set apart each afternoon to read to him the manuscript of his book. During the anecdotes Hargraves never failed to laugh at exactly the right point. The major was moved to declare to Miss Lydia one day that young Hargraves possessed remarkable perception and a gratifying respect for the old regime. And when it came to talking of those old days -- if Major Talbot liked to talk, Mr. Hargraves was entranced to listen.
    
    Like almost all old people who talk of the past, the major loved to linger over details. In describing the splendid, almost royal, days of the old planters, he would hesitate until he had recalled the name of the Negro who held his horse, or the exact date of certain minor happenings, or the number of bales of cotton raised in such a year; but Hargraves never grew impatient or lost interest. On the contrary, he would advance questions on a variety of subjects connected with the life of that time, and he n ever failed to extract ready replies.
    
    The fox hunts, the 'possum suppers, the hoe downs and jubilees in the Negro quarters, the banquets in the plantation-house hall, when invitations went for fifty miles around; the occasional feuds with the neighbouring gentry; the major's duel with Rathbone Culbertson about Kitty Chalmers, who afterward married a Thwaite of South Carolina; and private yacht races for fabulous sums on Mobile Bay; the quaint beliefs, improvident habits, and loyal virtues of the old slaves -- all these were subjects that held both the major and Hargraves absorbed for hours at a time.
    
    Sometimes, at night, when the young man would be coming upstairs to his room after his turn at the theatre was over, the major would appear at the door of his study and beckon archly to him. Going in, Hargraves would find a little table set with a decanter, sugar bowl, fruit, and a big bunch of fresh green mint.
    
    
     
    "It occurred to me," the major would begin -- he was always ceremonious -- "that perhaps you might have found your duties at the -- at your place of occupation -- sufficiently arduous to enable you, Mr. Hargraves, to appreciate what the poet might well have had in his mind when he wrote, 'tired Nature's sweet restorer,' -- one of our Southern juleps."
    
    It was a fascination to Hargraves to watch him make it. He took rank among artists when he began, and he never varied the process. With what delicacy he bruised the mint; with what exquisite nicety he estimated the ingredients; with what solicitous care he capped the compound with the scarlet fruit glowing against the dark green fringe! And then the hospitality and grace with which he offered it, after the selected oat straws had been plunged into its tinkling depths!
    
    After about four months in Washington, Miss Lydia discovered one morning that they were almost without money. The "Anecdotes and Reminiscences" was completed, but publishers had not jumped at the collected gems of Alabama sense and wit. The rental of a small house which they still owned in Mobile was two months in arrears. Their board money for the month would be due in three days. Miss Lydia called her father to a consultation.
    
    "No money?" said he with a surprised look. "It is quite annoying to be called on so frequently for these petty sums. Really, I --"
    
    The major searched his pockets. He found only a two-dollar bill, which he returned to his vest pocket.
    
    "I must attend to this at once, Lydia," he said. "Kindly get me my umbrella and I will go down town immediately. The congressman from our district, General Fulghum, assured me some days ago that he would use his influence to get my book published at an early date. I will go to his hotel at once and see what arrangement has been made."
    
    With a sad little smile Miss Lydia watched him button his "Father Hubbard" and depart, pausing at the door, as he always did, to bow profoundly.
    
    That evening, at dark, he returned. It seemed that Congressman Fulghum had seen the publisher who had the major's manuscript for reading. That person had said that if the anecdotes, etc., were carefully pruned down about one half, in order to eliminate the sectional and class prejudice with which the book was dyed from end to end, he might consider its publication.
    
    The major was in a white heat of anger, but regained his equanimity, according to his code of manners, as soon as he was in Miss Lydia's presence.
    
    "We must have money," said Miss Lydia, with a little wrinkle above her nose. "Give me the two dollars, and I will telegraph to Uncle Ralph for some to-night."
    
    The major drew a small envelope from his upper vest pocket and tossed it on the table.
    
    
     
    "Perhaps it was injudicious," he said mildly, "but the sum was so merely nominal that I bought tickets to the theatre to-night. It's a new war drama, Lydia. I thought you would be pleased to witness its first production in Washington. I am told that the South has very fair treatment in the play. I confess I should like to see the performance myself."
    
    Miss Lydia threw up her hands in silent despair.
    
    Still, as the tickets were bought, they might as well be used. So that evening, as they sat in the theatre listening to the lively overture, even Miss Lydia was minded to relegate their troubles, for the hour, to second place. The major, in spotless linen, with his extraordinary coat showing only where it was closely buttoned, and his white hair smoothly roached, looked really fine and distinguished. The curtain went up on the first act of "A Magnolia Flower," revealing a typical Southern plantation scen e. Major Talbot betrayed some interest.
    
    "Oh, see!" exclaimed Miss Lydia, nudging his arm, and pointing to her programme.
    
    The major put on his glasses and read the line in the cast of characters that her finger indicated.
    
    Col. Webster Calhoun...H. Hopkins Hargraves.
    
    "It's our Mr. Hargraves," said Miss Lydia. "It must be his first appearance in what he calls 'the legitimate.' I'm so glad for him."
    
    Not until the second act did Col. Webster Calhoun appear upon the stage. When he made his entry Major Talbot gave an audible sniff, glared at him, and seemed to freeze solid. Miss Lydia uttered a little, ambiguous squeak and crumpled her programme in her hand. For Colonel Calhoun was made up as nearly resembling Major Talbot as one pea does another. The long, thin white hair, curly at the ends, the aristocratic beak of a nose, the crumpled, wide, ravelling shirt front, the string tie, with the bow nearly under one ear, were almost exactly duplicated. And then, to clinch the imitation, he wore the twin to the major's supposed to be unparalleled coat. High-collared, baggy, empire-waisted, ample-skirted, hanging a foot lower in front than behind, the garment could have been designed from no other pattern. From then on, the major and Miss Lydia sat bewitched, and saw the counterfeit presentment of a haughty Talbot "dragged," as the major afterward expressed it, "through the slanderous mire of a corrupt st age."
    
    Mr. Hargraves had used his opportunities well. He had caught the major's little idiosyncrasies of speech, accent, and intonation and his pompous courtliness to perfection -- exaggerating all to the purposes of the stage. When he performed that marvellous bow that the major fondly imagined to be the pink of all salutations, the audience sent forth a sudden round of hearty applause.
    
    Miss Lydia sat immovable, not daring to glance toward her father. Sometimes her hand next to him would be laid against her cheek, as if to conceal the smile which, in spite of her disapproval, she could not entirely suppress.
    
    The culmination of Hargraves's audacious imitation took place in the third act. The scene is where Colonel Calhoun entertains a few of the neighbouring planters in his "den."
    
    Standing at a table in the centre of the stage, with his friends grouped about him, he delivers that inimitable, rambling, character monologue so famous in "A Magnolia Flower," at the same time that he deftly makes juleps for the party.
    
    Major Talbot, sitting quietly, but white with indignation, heard his best stories retold, his pet theories and hobbies advanced and expanded, and the dream of the "Anecdotes and Reminiscences" served, exaggerated and garbled. His favourite narrative -- that of his duel with Rathbone Culbertson -- was not omitted, and it was delivered with more fire, egotism, and gusto than the major himself put into it.
    
    The monologue concluded with a quaint, delicious, witty little lecture on the art of concocting a julep, illustrated by the act. Here Major Talbot's delicate but showy science was reproduced to a hair's breadth -- from his dainty handling of the fragrant weed -- "the one-thousandth part of a grain too much pressure, gentlemen, and you extract the bitterness, instead of the aroma, of this heaven-bestowed plant" -- to his solicitous selection of the oaten straws.
    
    At the close of the scene the audience raised a tumultuous roar of appreciation. The portrayal of the type was so exact, so sure and thorough, that the leading characters in the play were forgotten. After repeated calls, Hargraves came before the curtain and bowed, his rather boyish face bright and flushed with the knowledge of success.
    
    At last Miss Lydia turned and looked at the major. His thin nostrils were working like the gills of a fish. He laid both shaking hands upon the arms of his chair to rise.
    
    
     
    "We will go, Lydia," he said chokingly. "This is an abominable -- desecration."
    
    Before he could rise, she pulled him back into his seat. "We will stay it out," she declared. "Do you want to advertise the copy by exhibiting the original coat?" So they remained to the end.
    
    Hargraves's success must have kept him up late that night, for neither at the breakfast nor at the dinner table did he appear.
    
    About three in the afternoon he tapped at the door of Major Talbot's study. The major opened it, and Hargraves walked in with his hands full of the morning papers -- too full of his triumph to notice anything unusual in the major's demeanour.
    
    "I put it all over 'em last night, major," he began exultantly. "I had my inning, and, I think, scored. Here's what the _Post_ says:
    
    His conception and portrayal of the old-time Southern colonel, with his absurd grandiloquence, his eccentric garb, his quaint idioms and phrases, his moth-eaten pride of family, and his really kind heart, fastidious sense of honour, and lovable simplicity, is the best delineation of a character role on the boards to-day. The coat worn by Colonel Calhoun is itself nothing less than an evolution of genius. Mr. Hargraves has captured his public.
    
    "How does that sound, major, for a first nighter?"
    
    "I had the honour" -- the major's voice sounded ominously frigid -- "of witnessing your very remarkable performance, sir, last night."
    
    Hargraves looked disconcerted.
    
    "You were there? I didn't know you ever -- I didn't know you cared for the theatre. Oh, I say, Major Talbot," he exclaimed frankly, "don't you be offended. I admit I did get a lot of pointers from you that helped me out wonderfully in the part. But it's a type, you know -- not individual. The way the audience caught on shows that. Half the patrons of that theatre are Southerners. They recognized it."
    
    "Mr. Hargraves," said the major, who had remained standing, "you have put upon me an unpardonable insult. You have burlesqued my person, grossly betrayed my confidence, and misused my hospitality. If I thought you possessed the faintest conception of what is the sign manual of a gentleman, or what is due one, I would call you out, sir, old as I am. I will ask you to leave the room, sir."
    
    The actor appeared to be slightly bewildered, and seemed hardly to take in the full meaning of the old gentleman's words.
    
    "I am truly sorry you took offence," he said regretfully. "Up here we don't look at things just as you people do. I know men who would buy out half the house to have their personality put on the stage so the public would recognize it."
    
    "They are not from Alabama, sir," said the major haughtily.
    
    "Perhaps not. I have a pretty good memory, major; let me quote a few lines from your book. In response to a toast at a banquet given in -- Milledgeville, I believe -- you uttered, and intend to have printed, these words:
    
    The Northern man is utterly without sentiment or warmth except in so far as the feelings may be turned to his own commercial profit. He will suffer without resentment any imputation cast upon the honour of himself or his loved ones that does not bear with it the consequence of pecuniary loss. In his charity, he gives with a liberal hand; but it must be heralded with the trumpet and chronicled in brass.
    
    "Do you think that picture is fairer than the one you saw of Colonel Calhoun last night?"
    
    "The description," said the major frowning, "is -- not without grounds. Some exag -- latitude must be allowed in public speaking."
    
    "And in public acting," replied Hargraves.
    
    "That is not the point," persisted the major, unrelenting. "It was a personal caricature. I positively decline to overlook it, sir."
    
    "Major Talbot," said Hargraves, with a winning smile, "I wish you would understand me. I want you to know that I never dreamed of insulting you. In my profession, all life belongs to me. I take what I want, and what I can, and return it over the footlights. Now, if you will, let's let it go at that. I came in to see you about something else. We've been pretty good friends for some months, and I'm going to take the risk of offending you again. I know you are hard up for money -- never mind how I found out; a boarding house is no place to keep such matters secret -- and I want you to let me help you out of the pinch. I've been there often enough myself. I've been getting a fair salary all the season, and I've saved some money. You're welcome to a couple hundred -- or even more -- until you get --"
    
    
     
    "Stop!" commanded the major, with his arm outstretched. "It seems that my book didn't lie, after all. You think your money salve will heal all the hurts of honour. Under no circumstances would I accept a loan from a casual acquaintance; and as to you, sir, I would starve before I would consider your insulting offer of a financial adjustment of the circumstances we have discussed. I beg to repeat my request relative to your quitting the apartment."
    
    Hargraves took his departure without another word. He also left the house the same day, moving, as Mrs. Vardeman explained at the supper table, nearer the vicinity of the down-town theatre, where "A Magnolia Flower" was booked for a week's run.
    
    Critical was the situation with Major Talbot and Miss Lydia. There was no one in Washington to whom the major's scruples allowed him to apply for a loan. Miss Lydia wrote a letter to Uncle Ralph, but it was doubtful whether that relative's constricted affairs would permit him to furnish help. The major was forced to make an apologetic address to Mrs. Vardeman regarding the delayed payment for board, referring to "delinquent rentals" and "delayed remittances" in a rather confused strain.
    
    Deliverance came from an entirely unexpected source.
    
    Late one afternoon the door maid came up and announced an old coloured man who wanted to see Major Talbot. The major asked that he be sent up to his study. Soon an old darkey appeared in the doorway, with his hat in hand, bowing, and scraping with one clumsy foot. He was quite decently dressed in a baggy suit of black. His big, coarse shoes shone with a metallic lustre suggestive of stove polish. His bushy wool was gray -- almost white. After middle life, it is difficult to estimate the age of a Negro . This one might have seen as many years as had Major Talbot.
    
    "I be bound you don't know me, Mars' Pendleton," were his first words.
    
    The major rose and came forward at the old, familiar style of address. It was one of the old plantation darkeys without a doubt; but they had been widely scattered, and he could not recall the voice or face.
    
    "I don't believe I do," he said kindly -- "unless you will assist my memory."
    
    "Don't you 'member Cindy's Mose, Mars' Pendleton, what 'migrated 'mediately after de war?"
    
    "Wait a moment," said the major, rubbing his forehead with the tips of his fingers. He loved to recall everything connected with those beloved days. "Cindy's Mose," he reflected. "You worked among the horses -- breaking the colts. Yes, I remember now. After the surrender, you took the name of -- don't prompt me -- Mitchell, and went to the West -- to Nebraska."
    
    "Yassir, yassir," -- the old man's face stretched with a delighted grin -- "dat's him, dat's it. Newbraska. Dat's me -- Mose Mitchell. Old Uncle Mose Mitchell, dey calls me now. Old mars', your pa, gimme a pah of dem mule colts when I lef' fur to staht me goin' with. You 'member dem colts, Mars' Pendleton?"
    
    "I don't seem to recall the colts," said the major. "You know I was married the first year of the war and living at the old Follinsbee place. But sit down, sit down, Uncle Mose. I'm glad to see you. I hope you have prospered."
    
    Uncle Mose took a chair and laid his hat carefully on the floor beside it.
    
    "Yassir; of late I done mouty famous. When I first got to Newbraska, dey folks come all roun' me to see dem mule colts. Dey ain't see no mules like dem in Newbraska. I sold dem mules for three hundred dollars. Yassir -- three hundred.
    
    "Den I open a blacksmith shop, suh, and made some money and bought some lan'. Me and my old 'oman done raised up seb'm chillun, and all doin' well 'cept two of 'em what died. Fo' year ago a railroad come along and staht a town slam ag'inst my lan', and, suh, Mars' Pendleton, Uncle Mose am worth leb'm thousand dollars in money, property, and lan'."
    
    "I'm glad to hear it," said the major heartily. "Glad to hear it."
    
    "And dat little baby of yo'n, Mars' Pendleton -- one what you name Miss Lyddy -- I be bound dat little tad done growed up tell nobody wouldn't know her."
    
    The major stepped to the door and called: "Lydia, dear, will you come?"
    
    Miss Lydia, looking quite grown up and a little worried, came in from her room.
    
    "Dar, now! What'd I tell you? I knowed dat baby done be plum growed up. You don't 'member Uncle Mose, child?"
    
    "This is Aunt Cindy's Mose, Lydia," explained the major. "He left Sunnymead for the West when you were two years old."
    
    "Well," said Miss Lydia, "I can hardly be expected to remember you, Uncle Mose, at that age. And, as you say, I'm 'plum growed up,' and was a blessed long time ago. But I'm glad to see you, even if I can't remember you."
    
    And she was. And so was the major. Something alive and tangible had come to link them with the happy past. The three sat and talked over the olden times, the major and Uncle Mose correcting or prompting each other as they reviewed the plantation scenes and days.
    
    The major inquired what the old man was doing so far from his home.
    
    "Uncle Mose am a delicate," he explained, "to de grand Baptis' convention in dis city. I never preached none, but bein' a residin' elder in de church, and able fur to pay my own expenses, dey sent me along."
    
    "And how did you know we were in Washington?" inquired Miss Lydia.
    
    "Dey's a cullud man works in de hotel whar I stops, what comes from Mobile. He told me he seen Mars' Pendleton comin' outen dish here house one mawnin'.
    
    "What I come fur," continued Uncle Mose, reaching into his pocket -- "besides de sight of home folks -- was to pay Mars' Pendleton what I owes him."
    
    "Owe me?" said the major, in surprise.
    
    "Yassir -- three hundred dollars." He handed the major a roll of bills. "When I lef' old mars' says: 'Take dem mule colts, Mose, and, if it be so you gits able, pay fur 'em'. Yassir -- dem was his words. De war had done lef' old mars' po' hisself. Old mars' bein' 'long ago dead, de debt descends to Mars' Pendleton. Three hundred dollars. Uncle Mose is plenty able to pay now. When dat railroad buy my lan' I laid off to pay fur dem mules. Count de money, Mars' Pendleton. Dat's what I sold dem mules f ur. Yassir."
    
    Tears were in Major Talbot's eyes. He took Uncle Mose's hand and laid his other upon his shoulder.
    
    "Dear, faithful, old servitor," he said in an unsteady voice, "I don't mind saying to you that 'Mars' Pendleton' spent his last dollar in the world a week ago. We will accept this money, Uncle Mose, since, in a way, it is a sort of payment, as well as a token of the loyalty and devotion of the old regime. Lydia, my dear, take the money. You are better fitted than I to manage its expenditure."
    
    "Take it, honey," said Uncle Mose. "Hit belongs to you. Hit's Talbot money."
    
    After Uncle Mose had gone, Miss Lydia had a good cry -- for joy; and the major turned his face to a corner, and smoked his clay pipe volcanically.
    
    The succeeding days saw the Talbots restored to peace and ease. Miss Lydia's face lost its worried look. The major appeared in a new frock coat, in which he looked like a wax figure personifying the memory of his golden age. Another publisher who read the manuscript of the "Anecdotes and Reminiscences" thought that, with a little retouching and toning down of the high lights, he could make a really bright and salable volume of it. Altogether, the situation was comfortable, and not without the touch of hope that is often sweeter than arrived blessings.
    
    One day, about a week after their piece of good luck, a maid brought a letter for Miss Lydia to her room. The postmark showed that it was from New York. Not knowing any one there, Miss Lydia, in a mild flutter of wonder, sat down by her table and opened the letter with her scissors. This was what she read:
    
    Dear Miss Talbot:
    
    I thought you might be glad to learn of my good fortune. I have received and accepted an offer of two hundred dollars per week by a New York stock company to play Colonel Calhoun in "A Magnolia Flower."
    
    There is something else I wanted you to know. I guess you'd better not tell Major Talbot. I was anxious to make him some amends for the great help he was to me in studying the part, and for the bad humour he was in about it. He refused to let me, so I did it anyhow. I could easily spare the three hundred.
    
    Sincerely yours,
    
    H. Hopkins Hargraves,
    
    P.S. How did I play Uncle Mose?
    
    Major Talbot, passing through the hall, saw Miss Lydia's door open and stopped.
    
    "Any mail for us this morning, Lydia, dear?" he asked.
    
    Miss Lydia slid the letter beneath a fold of her dress.
    
    "The _Mobile Chronicle_ came," she said promptly. "It's on the table in your study."`,
    genre: "Comedy",
  },
  {
    user: "60c0251d2524913ea6614330",
    title: "Mahalo King Cod Filet",
    text: `A slate-grey sky hung heavy over the President James K. Polk Memorial rest area on Interstate 64 in southern Indiana. At the fueling station, eighteen wheelers lined up under bright green lights for diesel and windshield wiper fluid from an army of apathetic attendants. A mother carrying a styrofoam coffee cup emerged from the Kwik Mart, pulling the collar of her neon pink and light purple ski jacket tight around her neck with her free hand and hurrying her two children across the broad expanse of cracked tarmac. A grove of oak trees, damp brown and bare of leaves for months now, peaked above the domed roof of the food court. At the far end of the parking lot, a mountain of exhaust-stained snow towered precariously over a red and yellow dumpster belonging to Solid Waste Disposition Incorporated, Akron, OH. A cacophony of colors and commotion.

    Frank eased his Kia into a parking spot and surveyed the scene. He was not like the rest of them, hustling to-and-fro on their way to somewhere else, to grandma’s house for Christmas, perhaps, or home after a work trip in Louisville or Wheeling or Pittsburgh. No. For Frank J. Marone, the President James K. Polk Memorial rest area was the destination.
    
    In front of him, a fifty-foot steel pole held aloft the black and red cowboy hat signage of the Arby’s Corporation, the curved lines of the double-peaked crown and round brim glowed a warm red against the cold of the December day.
    
    He picked up his phone, smiled, stuck his thumb up, and snapped a selfie. Below the image, he typed, “It’s been twelve years since I started this journey. At last, I come face to face with my white whale (or is it a cod?).” He sent it off to his forty-eight thousand-plus followers and then scrolled through his timeline. Back to the beginning, to 2009, the Roy Rogers outside of Toms River that still served the Cordon Bleu Gold, discontinued nationally in 2005. That one had been pretty easy. Just a quick jaunt down the Garden State Parkway. There and back in a short afternoon. Number nine on the list: the McSalmon Fritters, which he'd found at a barely functioning McDonalds outside of Homer, Alaska. That one had required more doing, an online fundraiser and a series of puddle jumpers.
    
    It had started as a lark, the quest for obscure and discontinued fast food items. Something to do. To pass the time. Shits and giggles. After he'd crossed number five or six off the list of twenty-five sandwiches and tenders and salad shakers, though, the quest had taken over his life, become his identity.
    
    Frank set the phone back down on the passenger seat and watched it buzz and ding with congratulatory missives. In front of the Arby’s, a man shuffled back and forth and spoke to himself angrily, a burned-to-the-filter cigarette hanging from the corner of his mouth.
    
    Frank was there to meet a man about a sandwich. Gordon Warmbacher, franchisee of sixteen Arby’s restaurants across the upper Midwest and Great Plains, about the legendary Mahalo King Cod Filet, to be precise. The Mahalo King was the last on his list that included the KFC Turkey Tender, the Burger King Ostrich Deluxe, and Taco Bell’s Cool Ranch Gator Taco, served exclusively in Louisiana and the Florida Panhandle. He had dedicated the last twelve years of his life to tracking these items down and reviewing them for his ever-increasing number of social media fans and fast food aficionados.
    
    Of all the items on the list, the Mahalo King Cod Filet had proven to be the most elusive. Introduced by the Arby’s Corporation at select stores in 2006, sales had badly underperformed expectations. Reviews were initially poor. People had mocked the incongruity of a New England fish served Hawaiian style. The pineapple slices that sat atop the deep-fried filet smothered in traditional Hawaiian huli-huli sauce would, if left for even a few minutes, soak through the sesame seed bun, leaving it soggy and difficult to pick up. Sales of the sandwich were discontinued after only four months, but it had become something of a cult favorite, with a small but devoted fan club dedicated to getting it back on the menu.
    
    There had been tips. Whispers and rumors of rogue Arby's restaurants still serving the sandwich. Frank had followed one dead end lead after another for nearly a year and a half and had been on the brink of giving up when he received a cryptic Direct Message from Gordon. It could be arranged, Gordon said, but Frank would need to be discreet. Details needed to be omitted, a certain degree of anonymity required. Gordon had a lot on the line. 
    
    Frank opened his car door and walked briskly toward the Arby’s entrance and past the man with the cigarette, who cursed at Frank under his breath. He entered and looked around. It was mid-afternoon, the quiet time between the lunch and dinner rushes. Brown and tan anti-slip tiling covered the floor in front of a recently-modernized counter manned by three maroon-shirted and bored looking employees. A middle-aged man in thick-rimmed glasses and a mustache waved to him from one of the booths lining the far wall. Gordon stood and extended his hand toward Frank as Frank approached. He smiled broadly. Gordon squeezed Frank's hand firmly and shook once, up and down. The two men slid across the brown vinyl seating across the table from one another. 
    
    “It’s a real pleasure to meet you,” Gordon said once they had settled in. “I’m a fan of your work. Been reading your blog since… Oh let’s see. Well, at least a couple of years now.” His accent was upper midwestern. Wisconsin. Or Minnesota, perhaps.
    
    “That’s very kind of you to say.”
    
    Gordon had a fair complexion with pink cheeks. His skin was pockmarked, probably from teenage acne. Despite it, he was handsome. His greying hair was well cut and the tailoring of his linen jacket appeared bespoke. He looked more suited to someplace with tablecloths and waiters with extensive knowledge about wines and cheeses. Frank, in his wrinkled tee shirt and unwashed jeans, felt suddenly underdressed.
    
    “I’ve got my staff working up our order now. Two Mahalo Cod Filet sandwiches, side of waffle fries. What sort of pop do you like to drink?”
    
    “Sprite will be fine. Thank you.”
    
    “Of course. I don’t even know why I asked. I should have known.”
    
    “I know you said you would treat me, but really, you don’t need to do that.”
    
    “Please. Don’t mention it. It’s my pleasure.” He called across the mostly empty restaurant. “Two large Sprites, no ice in mine.” One of the women behind the counter nodded.
    
    Gordon turned back to Frank. A silence fell over the booth. After a moment, Frank spoke.
    
    “How do you keep making it? The Mahalo King. It’s been, what, more than a decade since it was discontinued?” A statement in the form of a question, his voice rising slightly on the last syllable of the final word.
    
    Gordon smiled mischievously. “Amazing, isn’t it. Seems like it was only yesterday. I was just starting out with my first Arby’s back then. Up in Toledo. That was a big year for me. I hate to toot my own horn, but I've come a long way since then."
    
    The woman from behind the counter approached tentatively, put the Sprites on the table, and handed each of them a straw. Gordon stabbed the straw through the perforation on the plastic lid, took a long sip, and then cleared his throat.
    
    “When they announced that they were going to stop putting it on the menu, I bought up as much of the huli-huli sauce as I could. I made calls as far as Texas and California. Got the stuff FedExed to me overnight shipping. Nobody understood why I wanted this stuff. The Mahalo King never sold very well, as I'm sure you know. They were happy for me to take the stuff off their hands." He chuckled. "I’ve still got a few thousand servings left in my warehouse over in Sioux City. The rest I just sort of pull together on my own. The cod and pineapples. Those I get from the grocery store like anyone else would. Of course, the ingredients aren’t exactly the same as they would be if they came through the normal distribution channels, but I think we've done an admirable job recreating it.”
    
    Gordon took another sip of Sprite before continuing.
    
    “What can I say? I just love this sandwich. I couldn’t let it go. Of course, corporate doesn’t approve of me serving it.” He lowered his voice to a whisper. “Which is why I have to be so secretive. It’s a violation of policy. They could take away my franchise license if they find out I’m still serving it off menu.” Gordon winked theatrically.
    
    Frank nodded. “I appreciate that. And don’t worry. I’m being very careful not to give away any specifics.”
    
    Gordon looked around the restaurant. He took his glasses off, fogged them with his breath, pulled a cloth from his pants pockets, wiped the lenses clean. “Ah, here they come now.”
    
    A different server, a young man in an Arby’s baseball cap walked toward them carrying a brown plastic tray. He lowered it onto the table and then turned and walked briskly away.
    
    “Voila,” Gordon said with a flourish of his hand. “I give you the Mahalo King.” He picked up the cardboard basket that contained the sandwich and placed it in front of Frank. “There’s some extra huli-huli. I can’t get enough of the stuff.” He put two little clear plastic containers next to the sandwich. The liquid was thin and jet black.
    
    Frank observed the sandwich. The bun was already soggy from the pineapple slices. The critics had been right about that, he noted. He took out his phone again. Gordon smiled and then leaned his body away from the frame. “There she blows,” Frank typed out, invoking Melville once again. He pressed send and put the phone on the table face down. It immediately started to rattle and shimmy toward the edge. Frank took a deep breath and closed his eyes.
    
    “This is a big moment for you,” Gordon said solemnly.
    
    “Twelve years. Twenty-three thousand miles. Fifty thousand followers," Frank recounted. "Can I ask you, something?"
    
    "Shoot."
    
    "If you were reading my feed and you knew that I was looking for this sandwich, why didn't you call me sooner?"
    
    Gordon smiled. He tore off a bit of waffle fry and put it in his mouth, chewing deliberately. "Well, I supposed I could have done that, but it would have been a little too easy. Don't you think? I didn't want to deprive you of the journey."
    
    Frank opened his eyes and turned his head toward the window. It was starting to snow.
    
    “Have you thought about what you’re going to do next?" Gordon asked. "Now that you've reached the end of your list, I mean."
    
    Frank watched the lights of traffic slide past on the interstate beyond the parked cars and the fifty-foot glowing sign and the fueling station and the tower of dirty snow and the bare oak trees. He thought about the drive home, his one-bedroom apartment with its few pieces of prefabricated Swedish plywood furniture, his job managing logistics for an office supply outlet. He thought about Gordon building his empire of Arby's. Finally, Frank turned back to the man sitting across from him. “I don’t know yet. I guess I’ll need to figure that out.”
    
    Gordon sighed and smiled understandingly. “You’ll have time for that later, I suppose. What's important is that we've got these Mahalo Kings." Gordon picked up his sandwich and held it aloft triumphantly, urging Frank to do the same. "For now, let's just savor the moment."`,
    genre: "Action/Adventure",
  },
  {
    user: "60c0251d2524913ea6614330",
    title: "On the Origin of Shadows",
    text: `There are two things I have always wanted you to know about the house. Ever since you picked it out, in the middle of a recession, at a heavy discount, as you put it. As if it was a carton of milk about to go out of date. For us, you said, finally away from the hustle. And there are two things I have wanted to tell you. But I didn’t know how.

    1. I hate the glass door to the back garden. It’s like a wound barely held by shaggy stitches. One measly screwdriver stuck into the lock would suffice to split it open, exposing the house’s organs viable to sell on the black market. The hall like intestines, dark and humid, slapped with some nonsensical paintings you were certain would triple in value sometime. The bathroom like a liver, maroon and old-fashioned, an old bonsai fig ruling over the windowsill. You always prayed it wouldn’t just drop dead, except trees don’t do that, you know, they die standing. ‘It will be worth a fortune one day.’ At night, it cast a shadow like a mad broom that developed an evil mind of its own and wanted to sweep us under the rug when we came in for a midnight pee.
    
    I wonder what our bedroom would be if it were a body part. The spleen comes to mind, an organ so forgotten nobody can remember what it does. I looked it up and the spleen filters bad blood as it turns out. That’s about right, more often than not, we argued in bed instead of, and then you bought the big TV. ‘Who puts a screen in their bedroom?’ I asked you. ‘Couples with,’ you replied, ‘You know.’ Or couples without. Prepositions were often missing their nouns in our relationship.
    
    So many people turned up for the housewarming party, old neighbours and new, and your colleagues from work, remember? You were a popular man, the best of. I was carrying a big pitcher of margaritas to the back garden. I wonder if anyone actually likes those, the snot-like mixture that smells vaguely of poison, acidic dreams and delirium. 
    
    Through the glass door, I saw the backyard, plated gold by the setting sun, and your long shadow. ‘Oh, really?’ you said and it sounded so seductive I thought you had to be talking to me. How did you know I was there? Was it that smell of tequila?
    
    And then, a different shadow stepped into yours, and I couldn’t tell them apart anymore. I stared at the blinding concrete tiles until the shapes separated again, yours straight and simple, hers like an hourglass. No words were said. Your favourite co-worker came through and stood next to me until you split in two again as if by the hand of an invisible shadow puppeteer. No words were said.
    
    ‘Why were you hugging her?’ I asked you later that night, one of our first nights in the new bed, with lights off. 
    
    ‘She’s going through,’ you trailed off. A dreadful divorce, I know. If I’d had a nickel for every time you said that, I could have probably been able to afford a packet of condoms for you.
    
    The sheets rustled as you turned away to sleep, and your outline became a shadow of a mountainous landscape. I guess you could only ever be straight with her, and I recalled your outline in the blinding sun, imagining stepping on it and bashing its head in.
    
    Time seemed to flow differently in the new house, leaking into all the new rooms which didn’t quite understand their purpose, and weeks were punctuated by new purchases like semicolons, separating one arbitrary chunk of life from the other.
    
    You brought another painting home that day and told me it would hang on the top of the stairs, and I nodded. You unwrapped it and stepped back to join me, but I wasn’t looking. There was a gold smudge on the lapel of your shirt. ‘What’s that?’ I asked. You turned your head to examine it, which gave you a double chin. ‘It’s eye shadow,’ I added, you looked away to the glass door, and your eyes drowned in light, extricating all expression I could have guessed from the size of your pupils. 
    
    ‘Yes. She was crying today. Her ex is trying to take away,’ you explained and the missing part was substituted for a vague hand wave of a prestidigitator. What? The house? The kids? The chicken pad thai?
    
    If I’d said something then, it would have been the beginning of the end. But I didn’t, and some invisible line shifted closer towards me and I couldn’t inch away again. The shadows took on new colours every time and appeared on different parts of your wardrobe, cuffs, collars, and once, even your boxer shorts. She’d always worn a lot of makeup. I called your favourite co-worker, the one who stood by me and watched you intertwine once. ‘She is going through that divorce,’ he said, his voice flattened by the small speaker on the phone, and I didn’t cry to him. ‘Would you like me to come over?’ he asked, but his pitch didn’t rise at the end of the question, and he clicked off.
    
    I told you I’d be working late that day, but I ended up coming home for lunch. It’d turned out, you know what, never mind. It doesn’t matter. I saw her car in the driveway, so I entered through the back door, turning the almost symbolic, meaningless key in the lock. All I really needed was a hairpin to pick it. Did you secretly want someone to break in and steal all your paintings and your hag tree, so there would be nothing left but the two of us, pumping air instead of blood in the house’s hardened veins?
    
    I sat in the living room and waited on the desolate corner chair we couldn’t think of putting anywhere useful. You didn’t even spot me when you finally came in. I still like to think it was only because I was covered in a shadow so deep it felt like a blanket. But I know really that you couldn’t see me anymore, no more than you could see the works of art you so thoughtfully procured not for our viewing pleasure, but as a colourful investment.
    
    We didn’t argue and you only took half the things and I didn’t argue. I wanted to keep the painting at the top of the stairs, and you didn’t argue, and you instructed me to wait for a couple more years before selling and I didn’t argue. You asked about the tree and I told you to feel free to it and I didn’t argue at all. I was relieved it wouldn’t try to get me at night anymore.
    
    I’ve got rid of the glass door right after you’d moved out. It wasn’t cheap, but now, I can’t ever recreate that scene, the pitcher radiating cold, the concrete sparkling gold, the merging shadows staining my perfect garden floor. There’s now a wall where the door was, and the wound has closed, leaving no scar at all.
    
    I often think about the useless rooms now, and what they are, and I think the house is one big brain, mine only to think and feel as I please. I gave the living room chair away to charity. I never wanted to sit in it again. Each room is like a lobe of my mind, and I have no photos of you up on the walls. The wallpapers underneath where they used to hang are a little lighter and fresher, and I ask people to take pictures of me when we go out, when I holiday with friends, at family events, dates. I get given new frames for Christmas and the bald wall patches disappear one by one.
    
    2. The second thing I’ve always wanted to tell you about this house is that I’d slept with your favourite co-worker in our new bed before we ever did, and when you said it smelled used and considered returning it, that was just his sweat and mine. And when you pointed out the rash I had on my neck and breasts, that was just scratches from his five o’clock shadow.`,
    genre: "Drama",
  },
  {
    user: "60c77c65c3f357d34b633613",
    title: "Golden Cheekbones and the Rising Sun",
    text: `I open my eyes.

    I am readying myself for the morning.
    
    A golden cheekbone lined by the rising sun, beautiful in its simplicity. I touch it, once, her skin warm under my fingers, a reminder of how alive we are. How young we are.
    
    We are teenagers. Our hands are clumsy, too big for our skinny limbs, not sure where to go or what to think. These hands hold pens, and books, and dreams. We discuss the future in vivid colours, full of blossoming hope of what it could hold. Neither of us say it, our lips tied by the thin string of fear, but our dreams involve each other. Neither of us knows what love means, our kisses fuelled by wandering hands and inexperienced tongues, but I know the lines of her face better than I know the words of my textbook. Neither of us knows anything, but we know each other.
    
    We grow, as all things do, messily, with anger and lust and tears. She holds the neck of a bottle of beer, her head titled back, laughing into the night, her cheeks flushed. She is brighter than any star, and I wonder if I could replicate the jewels in her eyes, and make them into a jewel for her finger. I smile, small, and take another sip. I know that she is the one.
    
    Our wedding is small, but loud, screams of joy echoing from every lively corner. Her mother gives me a talk, my mother gives me a heart attack. All I can feel is the creases of her hand enveloped in mine, and the sweet press of her lips on my face. I do.
    
    "You do nothing!" She screams at me, waving at the dirty dishes lining every corner of our rotting kitchen. She is tired. I am tired. We both know it is not each other we are angry at, but the bank, the debt, the crushing weight of the tiny house. I bite my cheek. It is both my fault, and hers, and neither.
    
    She still crawls into our bed, and hugs me tight. I still make her coffee in the morning. It is a test, and we have passed.
    
    The first one is a surprise, with delighted screams and happy tears at the start, and terrible screams and pain filled tears at the end. But she is alive, and our child is alive, and they both nestle deep into the lining of my heart and refuse to let go. Surely my heart will run out of space for any more love.
    
    I was wrong. We have two more, and it still makes room.
    
    The children grow fast, faster than we ever did. They are sickly sweet when young, chubby cheeks and grotty hands, always reaching for something more. A little older, and they're cheeky, and quiet, and confused. A little older, and they're angsty, quiet, and polite. A little older still and they're angsty, angsty, and quiet.
    
    Then comes the dreaded stage. Angsty, angsty and angsty. Teenagers.
    
    A little older, and it's going, angsty, and angsty. Then gone, going and angsty. Then gone, gone, and going.
    
    It's not long before the last kisses us both on the forehead and thanks us for the privilege of receiving our love. I hold her hands. "Love is not a privilege," I say, "it is a necessity."
    
    She smiles, and thanks us anyway. She was always far too polite.
    
    We move into a smaller house. Cozy, not cramped. It brings back memories of our first place. "Don't talk about that!" she says, "that place was awful!" She smiles more now, and fills her days reading books and making bread. I kiss her neck as she makes cookies, and she playfully pushes me away. She thinks I only want chocolate, but her love is the sweetest thing in our kitchen.
    
    She takes up knitting, and I joke that she's getting old. She pretends to disagree, but we both know I'm right. My knees scream every time I bend to remove a weed from our growing garden.
    
    She gets sick.
    
    She survives.
    
    I get sick.
    
    I survive.
    
    She has glasses now, small and oval shaped, perched on the top of her nose. The kids in the neighbourhood call us "Gran and Pops." Apparently, according to our son, we have a "reputation." I disagree, of course. The only reason she makes cookies for the school children is so they don't drive their chunky bikes through my nice flowers. So what if I help them fix their punctured tyres? So what if she makes them fresh lemonade? So what if we told them "just ask him on a date, he told me he liked you the other day"? That doesn't mean we like the buggers.
    
    The young men flirt with her, as a joke. They say she's the most beautiful thing they've ever seen. I growl at them, of course, but only because they're right.
    
    Our faces are lined with wrinkles now, and my hearing is half gone. She's stooped now, hunched and pinched, yet every time she smiles we go back to being young, with those jewels in her eyes, and I fall in love all over again. We don't go out to the kids anymore. They come to us, and a young man helps her make the cookies when her hands shake, and a young woman helps me with the weeds when my knees give. I hear on the news every day about the new generation being lazy, and I shake my head every time. These kids are just growing the way all things grow. Messily.
    
    I wake up one morning to the sweet sound of birds. I wake up one morning to the smell of fresh grass. I wake up one morning, the sun peeking over the horizon, its gentle limbs stroking our faces from the window.
    
    I wake up one morning.
    
    She doesn't.
    
    A golden cheekbone lined by the rising sun, beautiful in its simplicity. I touch it, once, her skin cold under my fingers. A reminder of how long we had together, how lucky we were.
    
    I close my eyes.
    
    And let myself slip into the night.`,
    genre: "Romantic Comedy",
  },
  {
    user: "60c77c65c3f357d34b633613",
    title: "Broken Love",
    text: `Listening to the sound of the rain pouring ,Emily sat by her old room window watching as the water gracefully slides down the glass. Just like every other night loneliness had its way with her heart. As the angry rain drops rolled off the window so did the tears rolled out her eyes. The sound of the rain beating against the roof brings an unexplainable level of peace to her mind. The coldness of the window glass as she revived her hands across it sent a thrill to her body.

    She slowy and silently turned around looking at her sleeping husband as she attempts to open the window. The window creeks as she tried her best to get it open with limited amount of noise. Sleepless nights have become apart of her nightly routine, ever since they lost their child Malachi.
    
    As she remembered his unconditional love for the the rain, she smiled through her tears sniffling and using her old torn T-Shirt to wipe the tears from her cheeks. As the window finally swung open she stretched her arm out in the rain trying to revive her almost lifeless body. Nothing seemed to have help her heart, nothing will ever get the memory of his lifeless body out her mind.
    
    Staring deeply at the lightning striking rapidly she wonders how something so dangerous could be so beautiful all at once but not dangerous enough to take her life.
    
    Catching a glimpse of her reflection, she hides from the night light. At once she thought he loved her but after killing her son he ensured to remind her everyday of the monster she have become. The bruises to her fave would maje it hard for anyone to recognize her.
    
    After the accident he moved her to live all the way out in the forest where he could control her happiness.
    
    Her swollen eyes makes it alot more difficult for her to view the beauty of the rain.
    
    "Emily?" Her heartbeat fell flat hearing his voice from behind.
    
    "Please dont hit me?" She begged fearing the idea of angering him.
    
    "Turn around sweetie" A tear dripped off her cheeks as she hear the venom in his voice.
    
    Following his command she hangs her head low waiting for his commands that follows.
    
    "Look at me darling" Swallowing hard she knows what normally follows this command.
    
    Bracing herself for the worst she lifted her head only to have his left palm connecting with her face.
    
    As his palm lands on her already bruised cheeks she screamed out in pain and agony. But one thing she knew is that the pain she feels from his abuse will never be anything compared to that of which she feels towards the loss of Malachi.
    
    She whimpers as he walks closer to her, holding her breath, she waits for another slap to her face, her head being hit against the wall, him aggressively choking her or having his way sexually with her.
    
    He stood there for a while staring out at the rain, while Emily continued bracing her mind and body for the next hit.
    
    After a while she slowly lifts her head to see he's not staring at her but instead his eyes were focused on the storm outside.
    
    The storm wasn't dangerous enough to hurt her but he's enough to take her last breath.
    
    She took the time to admire the beautiful face she fell inlove with but one thing she knew is his soul is long lost and there's nothing to bring it back.
    
    Looking as the veins his face soften Emily took this as the perfect opportunity to speak to him.
    
    Turning aroud she wraps her arm around her body to decrease the coldness of the morning.
    
    "Why do you do it? Do you not love me anymore? Do you not see me as a your wife? Do you see me as nothing but a monster?" She ushered question after question at him but he didn't even shift his eyes to look at her.
    
    With the little strength she had remaining she gathered it all launching numerous tumps at his chest.
    
    Again neither his body nor eyes shift, he felt nothing from her tiny arms.
    
    He knew what he was doing, he knew she was hurting, he knew she wasn't guilty but how could he deal with such pain .
    
    How could he get up everyday knowing he will never see his son again?
    
    It pained his heart everytime he layed his hands on her, but the pain he felt inside was overwhelming.
    
    He couldn't control his emotions, he couldn't control his urge to release the pain he bottled up inside.
    
    It started from one drink, one cigar, one drunk night , one hit to her face and now he has become the person he feared growing up.
    
    "Joseph answer me!" He quickly wraps his arm around pulling her to his chest allowing himself to break down.
    
    How could he ask her to forgive him after all he as done. He knew he love her with every aspect of his heart. But how could he look at her without feeling guilty.
    
    "Why Joseph, why?? Why me?? Why do yiu hurt me like this?"
    
    "Because you were there, you didn't fight back " Hearing those words a different form of hate developed inside her.
    
    "Because I was here, augh Joseph. You abused me for a whole two years because I loved you too much to fight back, you are the monster, you are the monster here. You know I didn't kill Malachi but that's your way of keeping me under your feet"
    
    Her chest pained her as she screamed.
    
    He didn't let her free thou, he held her tight as if its the last time he'll be able to hold her close.
    
    "Please forgive me Lily, I am stupid, you dont have to live here anymore,you dont have to remember my name, but please forgive me for all the hurt I've caused you. Joseph sobbed into her hair, and it pained his heart that it no longer smelt anything close to the vanilla fragrance he loved.
    
    "Do you think I want to leave you Joseph, No I love you but I've just realized I love myself more. This is a final time you'll be able to lay your hands on me in pain. This is the final time sorrowful tears will flow out of my eyes because of you".
    
    "I love you so much Emily" chosen her eyes she let those words take her to her son. Never in a thousand years would she have imagined she would die in the arms of the one she loves hearing him utter the most bittersweet words.`,
    genre: "Romance",
  },
];

async function seedTheDB() {
  await require("../index");
  Stories.create(storySeeds)
    .then((storiesFromDB) => {
      console.log(
        `Yay, ${storiesFromDB.length} short stories have been added to the db!`
      );
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log("Sadly, your seed process has failed. 😭", err);
    });
}

seedTheDB();