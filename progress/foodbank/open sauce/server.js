const PORT=8989; 

var express = require('express');
var app = express();

app.use(express.static('./'));


var recipes = [

	

	{
		name: "Sea bass grapefruit ceviche",
		description: "Ceviche is ideal dinner party food: it tastes amazing, looks impressive and is super-easy to make",
		subtitle:"A SOUTH AMERICAN CLASSIC",
		ingredients: "500 g sustainably sourecd sea bass , scaled, filleted and pinboned, 2 lemons , the juice of, 1 tsp sea salt, 2 fresh red chillies , halved, deseeded and chopped into 1cm rounds, 1 clove of garlic , grated or finely chopped, 2 pink grapefruit, 2 heads of fennel , trimmed and cut into thin wedges, tops reserved, a small bunch of mint , leaves picked, extra virgin olive oil , for drizzling",
		Method: "Ceviche is a South American way of semi-cooking fish or meat by using acid from citrus fruit, and it’s essential you get good fresh fish. You can vary the fruit and fish but the results will be fresh, light and zinging with flavour.. Slice the fish into 1cm strips, put them in a bowl and pop them in the fridge. In a separate bowl or jam jar, mix the lemon juice, salt, chilli and garlic, then pop this in the fridge. Cut the top and bottom off the grapefruit, carefully peel away the skin, then separate them into segments and put these in a bowl, squeezing the juice from a few segments into the bowl.. When your guests are ready to eat, get the fish out of the fridge and combine it with the fennel, grapefruit and most of the mint leaves. Give the marinade in the bowl or jam jar a mix, then pour the juices over the fish mixture, delicately toss together and leave for 2½ minutes. Serve simply, on a big platter, with the remaining mint leaves and fennel tops sprinkled over, adding a little drizzle of olive oil and a few grinds of black pepper.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1237_1_1436885379.jpg",
	},

	{
		name: "Peruvian Ceviche",
		description: "Ceviche is ideal dinner party food: it tastes amazing, looks impressive and is super-easy to make",
		subtitle:"A SOUTH AMERICAN CLASSIC",
		ingredients: "400 g sea bass, lemon sole or snapper , pinboned, skinned and filleted, sustainably sourced, 1 red or yellow pepper , deseeded and finely chopped, 2 spring onions , trimmed and finely sliced, juice of 3 lemons, 1 teaspoon sea salt, 1-2 fresh red chillies , deseeded and finely chopped, 8 sprigs of fresh mint , leaves picked, 8 sprigs of fresh coriander , leaves picked, 1 punnet of mustard cress, a few fennel tops , leaves picked (optional), extra virgin olive oil, freshly ground black pepper",
		Method: "During my time in New York I got to visit all sorts of wonderful and fascinating places, and on one occasion I was lucky enough to be taken to an illegal Peruvian restaurant – it was great fun. This ceviche was on the menu that night. Ceviche is a lovely little appetizer of fresh fish marinated in citrus juices. As long as you’ve got mega fresh fish it’s an absolute dream and delight to make and eat.Cut your fish fillets into 1cm cubes. Put these into a bowl with your chopped peppers and spring onions, then cover and place in the fridge until you need them. In a separate bowl or a jam jar, mix together the lemon juice, salt and chilli, then pop the lid on and place in the fridge to chill too. This may seem like a lot of salt but most of it gets drained off.Finally, wash and dry your herbs and cress and put them into the fridge as well.You can assemble the ceviche just before your guests are ready to eat. It’s important that you don’t leave the fish marinating for too long – you don’t want the acids in the juices to cook the fish. Pour the lemon dressing over the fish mixture and immediately mix it up. Leave it to sit for about 2½ minutes while you lay out the plates.Throw most of your herb mixture into the bowl with the fish and very quickly toss it together – I'm talking no more than 10 seconds here. Divide the ceviche between your 4 plates, gently spoon over a little of the dressing (discarding the rest) and sprinkle with the rest of the herbs. Drizzle over some good-quality extra virgin olive oil from a height, sprinkle with some freshly ground black pepper, and enjoy.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/992_1_1438787901.jpg",
	},

	{
		name: "Cajun blackened fish steaks",
		description: "“This bold and seriously spicy rub fragrantly flavours the fish in my version of this classic Southern dish. Get grilling! ”",
		subtitle:"COATED IN BADASS BOLD SPICES",
		ingredients: "4 x 200 g white fish fillets, sustainably sourced, such as sea bass, snapper, bream or pollock (approx. 2cm thick) , skin on, scaled and pinboned, 1 lemon, FOR THE RUB:, 10 sprigs of fresh thyme , leaves picked, 4 sprigs of fresh oregano , leaves picked, 2 cloves of garlic , peeled, 2 level teaspoons of smoked paprika, 1 teaspoon cayenne pepper, 1 teaspoon sea salt, 1 level teaspoon of finely ground black pepper, 2 tablespoons olive oil, 1 lemon",
		Method: "This is my version of a classic Southern dish, but just a word of warning: it is seriously spicy! The way I heard it, this brilliant rub was invented by an African-American chef working at Commander’s Palace, a posh New Orleans restaurant. The famous head chef there, Paul Prudhomme, took this recipe, added his own little tweaks and introduced blackened fish to the rest of the world. Basically it’s a bold rub that fragrantly flavours fish and meat and goes dark when it cooks, thanks to the paprika and garlic., Traditionally this dish has been made with the locally caught redfish, but it’s also great with any whole or filleted white fish. It goes with so many things, including chicken, pork, lamb and steak. When I was in Louisiana I cooked it on a barbecue, but I’ve shown you below how to do it indoors in a pan. Don’t be scared by how black the spices go: they’ll look burnt but the taste will be amazing., To make the rub, bash up your fresh herbs and garlic in a pestle and mortar until you've got a nice coarse paste. Mix in the spices, salt, pepper and olive oil, then squeeze in the juice of half the lemon, making sure not to let any pips get in there, and stir well., Lightly score the skin of your fish in lines about 2cm apart. Using your fingers, smear the rub all over both sides of the fish and into the cuts you've made. Put a non-stick pan or griddle pan over a medium-high heat and let it get nice and hot. Place your fish in the pan, skin side down, and let it cook for 3 to 4 minutes. It will get quite smoky, so you might want to open a window! Turn the heat down to low, then, very carefully, flip your fish over and cook for another 3 to 4 minutes on the second side., Cut your remaining lemon half and your second lemon into wedges for squeezing over. Serve them with your fish, a nice salad and boiled or steamed new potatoes dressed in good olive oil or butter. Don’t forget a nice cold glass of wine!",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/963_1_1433952568.jpg",
	},

		{
		name: "Asian-steamed sea bass",
		description: "",
		subtitle:"",
		ingredients: "1 x 1.5 kg whole sea bass , scaled, gutted and gills removed (ask your fishmonger to do this for you), sea salt, 5 spring onions , trimmed and finely sliced, 1 fresh red chilli, finely sliced, a thumb-sized piece of fresh ginger , peeled and finely chopped, a large bunch of fresh coriander , leaves roughly chopped, stalks finely sliced, 1 lime, low-salt soy sauce, sesame oil",
		Method: "Score the sea bass on both sides at 2cm intervals, cutting roughly 1cm deep, then place into the steamer tray. Sprinkle the inside and both sides of the fish lightly with sea salt., Mix the spring onions, chilli, ginger, coriander stalks and most of the leaves together on a board, then stuff and push into the cavity and slits in the fish. Squeeze over the lime juice, adding the squeezed lime halves to the tray. Hit it up with a splash of soy sauce, then cover with the lid. Fill the steamer pocket on the front of the oven with around 1 litre of water, then slot the steamer tray into the bottom of the oven so that the metal nozzle on the tray engages with the back of the oven, and set to steam for around 25 minutes, or until cooked to perfection., Serve on a bed of fluffy rice, drizzled with the juices from the bottom of the steamer tray, a drizzle of sesame oil and the remaining coriander leaves sprinkled over.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/956_36_1434037341.jpg",
	},


		{
		name: "Grilled pork chops",
		description: "",
		subtitle:"WITH BROCCOLI, ZINGY BULGUR & SPICY BEANS",
		ingredients: "300g bulgur wheat, 2 lemons, 4 thick boneless higher-welfare pork chops, olive oil, 2 cloves of garlic, 2 fresh red chillies, 2 400g can cannellini beans, 400g tenderstem broccoli, extra virgin olive oil",
		Method: "Place a griddle pan over a high heat, and switch the oven to the lowest setting. In a medium pan, cook the bulgur wheat in 800ml of boiling salted water for 20 minutes, or until tender – top up with extra water, if needed., Once cooked, finely grate in the zest from 2 lemons and squeeze in the juice from 1, then season to taste., While the bulgur wheat is cooking, drizzle the pork chops with 2 tablespoons of olive oil, add a pinch of sea salt and black pepper and rub into the meat., Place the chops onto the screaming hot griddle and cook for 8 to 10 minutes, or until cooked through, turning every 2 minutes. Transfer to a plate, cover with tin foil and place in the oven to keep warm., Peel and finely slice the garlic, then deseed and finely chop the chillies., Heat 3 tablespoons of olive oil in a frying pan over a high heat, add the chilli and garlic and cook for 1 minute, or until softened., Drain and add the cannellini beans, along with the cooked bulgur. Stir well to coat, check the seasoning and keep warm over a low heat until needed, stirring regularly., Refill the saucepan with boiling salted water and place over a high heat. Trim and add the broccoli, then cook for 2 to 3 minutes, or until al dente. Drain and steam dry., Tip the broccoli into a bowl, add 2 tablespoons of extra virgin olive oil, squeeze in the remaining lemon juice, season and toss together., Divide the spicy beans, bulgur and broccoli between four plates, pop a pork chop on top of each portion and drizzle with the resting juices.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/BTA-aKjUqVk81kUSti2izS.jpg",
	},

			{
		name: "Pork chops with quick cherry chutney",
		description: "“This would also be good with roast pork belly, as the acidity of the sauce is a good foil for the fattiness of the meat. Try serving this dish with roasted fennel and buttery new potatoes. ”",
		subtitle:"WITH BROCCOLI, ZINGY BULGUR & SPICY BEANS",
		ingredients: "1 fennel bulb, 1 onion, 1 knob of unsalted butter, olive oil, 1/2 teaspoon fennel seeds, 1 star anise, 400 g cherries, 2 tablespoons balsamic vinegar, 250 ml red wine, 4 higher-welfare pork chops",
		Method: "For the chutney, trim and roughly chop the fennel and peel and slice the onion. Add the butter and a lug of oil to a pan on a medium heat and throw in the fennel, fennel seeds, onion and star anise. Cook until the vegetables have softened but not browned. Meanwhile, destone the cherries., Add the cherries and vinegar and cook for 30 seconds or so, stirring to combine. Add the wine and bring to the boil. Cook to reduce the wine, stirring, until it has attained a chutney-like consistency. Season with a pinch of sea salt and black pepper. Remove star anise before serving., Meanwhile, put a frying pan on a high heat. Season the chops and brush them with oil. Fry for 3 to 4 minutes each side, or until done. Serve with the cherry chutney.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/E8UeZi6zKt2BIm15Q2c0hQ.jpg",
	},
		
		{
		name: "Old-school pork chops with apples and sage",
		description: "Whenever I fancy a bit of cosy pub grub at home, I rustle up these lovely, easy pork chops",
		subtitle:"TOPPED WITH GOOEY MELTED CHEESE",
		ingredients: "4 x 250 g higher-welfare pork chops, sea salt, freshly ground black pepper, olive oil, 2 good eating apples (such as Cox or russet) , unpeeled, cored and each cut into 8 wedges, 1 knob butter, 1 handful fresh sage leaves, 100 g good strong cheese (such as Stilton or Taleggio) , optional",
		Method: "Preheat the oven to 200ºC/400ºF/gas 6. What I like to do is to lay the pork chops out on a board and, using a sharp knife, make 2cm deep cuts all along the fatty side of them. You can ask your butcher to do this for you if you like. It helps to render the fat out and will also make the skin crispy. Sprinkle the chops with salt and pepper. Pour a lug of olive oil into a hot pan. Carefully place your chops in it and cook them for 2 to 3 minutes on each side until golden brown. If you need to, open out the little pieces of fat along the edge so they don’t stick together. When the chops are nearly done, lift them out of the pan and put them on to an oiled baking tray. Add the apple wedges and a knob of butter to the pan and fry until lightly golden. Lay 4 wedges of apple on top of each pork chop. Dress your sage leaves in a little olive oil and top each apple stack with them. Sometimes I like to top it all off with a knob of Stilton or Taleggio. Put the baking tray into the oven for 4 to 6 minutes until everything is golden and melted.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/364_1_1438763240.jpg",
	},

	{
		name: "Sea Bass in puff pastry",
		description: "A great alternative to Turkey this Christmas – or for any roast meat – this fish recipe is a guaranteed show-stopper",
		subtitle:"STUFFED WITH PRAWNS & SERVED WITH SALSA VERDE",
		ingredients: "60 g small cooked prawns 2 tbsp tarragon , finely chopped 1 tbsp olive oil , plus extra for greasing 1 large free-range egg , beaten 2 tbsp milk plain flour , for dusting 500 g puff pastry , halved 1 kg whole sea bass , filleted (ask your fishmonger to do this) green salad , to serve FOR THE SALSA VERDE: 1 small bunch of basil , leaves picked 1 small bunch of mint , leaves picked 1 small bunch of flat-leaf parsley , leaves picked 2 cloves of garlic 6 cornichons 2 tbsp capers , drained 5 tbsp anchovy fillets , drained 5 tbsp olive oil 1 tbsp red wine vinegar",
		Method: "Recipe by Andy Harris A great alternative to Turkey this Christmas – or for any roast meat – this fish recipe is a guaranteed show-stopper Preheat the oven to 220ºC/450ºF/gas 7. Combine the prawns, tarragon and olive oil in a small bowl and season generously. For the egg wash, whisk the egg and milk in a small bowl and set aside. Lightly flour a work surface and roll out half of the pastry to a rectangular shape about 5mm thick and 10cm longer than the fish fillets (for the head and tail). Transfer to a lightly oiled baking tin. Place one of the fillets, skin-side down, on the pastry, leaving a little more space at one end for the tail shape. Spoon the prawn and tarragon mixture over the fish and place the other fillet on top. Brush the edges of the pastry with the egg wash. Roll out the remaining pastry to the same size and use this to cover the fish, pressing the edges carefully to seal them. Use a small, sharp knife to trim the excess and create your fish shape. Then, with a teaspoon, score half-moon shapes into the pastry in the style of fish scales (but don’t pierce the pastry). Roll the off-cut pastry to 1cm thick, cut out a few thin strips to shape into fins, and tear off a small piece and roll into a ball for the fish’s eye. Build your fish shape, brush with the remaining egg wash, then bake for 15 minutes. Reduce the oven temperature to 220ºC/350ºF/gas 4 and cook for another 20 minutes, until the pastry is golden and the fish is cooked. Meanwhile, make the salsa verde. Roughly chop the herb leaves in the centre of a large chopping board. Add the garlic, cornichons, capers and anchovies and continue chopping until fine, mixing it together as you go. Transfer to a bowl, stir in the olive oil and vinegar, and season well. To serve, transfer the fish to a platter and serve in slices with the salsa verde and salad.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1411_1_1436885058.jpg",
	},
		{
		name: "Salmon en croute",
		description: "",
		subtitle:"WITH BROCCOLI, ZINGY BULGUR & SPICY BEANS",
		ingredients: "olive oil, 2 banana shallots, 100 g baby spinach, 1 bunch of fresh flat-leaf parsley, 200 g baby leaf watercress, 1 knob of butter, 1-2 lemons, 1 whole nutmeg , for grating, 200 g crème fraîche, 1 x 500 g thick, skinless salmon fillet, pin-boned, from sustainable sources, 500 g puff pastry, 1 large free-range egg",
		Method: "Preheat the oven to 200ºC/400ºF/gas 6. Line a large baking tray with greaseproof paper and brush it with a little oil. Peel and finely chop the shallots, roughly chop the spinach, then pick and chop the parsley leaves. Chop half the watercress, leaving the rest whole. To make the filling, warm the butter and a splash of oil in a pan over a low heat. Add the shallots and cook for 10 minutes, or until soft but not coloured. Add the spinach, parsley and chopped watercress to the pan with the zest and juice from 1 lemon. Season to taste and stir in a good grating of nutmeg. Cook down the leaves for 3 to 5 minutes, then mix in 1 tablespoon of the crème fraîche. Tip it into a sieve set over a bowl and press to squeeze out the juices. Leave the filling to cool. To make the sauce, blitz the remaining watercress and crème fraîche in a food processor with juices from the bowl. Season and add more lemon juice to taste. Transfer to a bowl and chill until needed. Slice the salmon fillet in half sideways, so you can open it like a book. Spoon the cooled filling down the middle, fold the fish back over to close and set aside. Cut the pastry in half and roll out each piece to the thickness of a pound coin and about 2cm wider than your salmon. Place one piece on the baking tray and lay the salmon on top in the middle. With your finger, dab water around the edge of the pastry, then lay the other piece on top. Mould the pastry around the fish with your hands, then press the edges with a fork to seal. Score the top with a knife, then beat and brush over the egg. Bake the salmon in the oven for 20 to 25 minutes, or until the pastry is crisp. Serve with the watercress sauce – delicious with a green salad and new potatoes.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/1QQhh_bsanv9hpOL0HSSyo.jpg",
	},

			{
		name: "Salmon with rhubarb sauce & tarragon mayo",
		description: "This simple, delicate poached salmon is served with some beautifully bold accoutrements, from a tangy rhubarb sauce to a zingy tarragon mayonnaise. ",
		subtitle:"",
		ingredients: "1 x 2.5 kg whole salmon , gutted and scaled, from sustainable sources, 1 onion, 2 carrots, 2 sticks of celery, 3 fresh bay leaves, 1 tablespoon black peppercorns, 1 tablespoon pink peppercorns, a few sprigs each of fresh flat-leaf parsley, tarragon, chervil and mint, PICKLED RED ONIONS, 2 small red onions, 4 tablespoons red wine vinegar, RHUBARB SAUCE, 5 sticks of forced rhubarb, 1 small eating apple, 2 tablespoons runny honey, 1 fresh bay leaf, 3 whole cloves, 1 splash of red wine vinegar, 1 orange, MAYONNAISE, 200 g fresh tarragon, 300 ml oil (a mixture of olive and vegetable oil works best), 2 large free-range egg yolks, 1 heaped teaspoon Dijon mustard, 1-2 tablespoons white wine vinegar, ½ a lemon",
		Method: "To poach the salmon, place it in a fish kettle or a large roasting tin. Cover with cold water and place the fish kettle or tin over two hobs. Peel and roughly chop the onion and carrots, then trim and roughly chop the celery. Place in the water with the salmon. Add the bay leaves and the black and pink peppercorns. Cover with a lid or tinfoil and bring to the boil. Switch off the heat and allow the water and salmon to cool for about 5 hours. For the pickled red onions, peel and finely slice them, using a mandolin if you have one (use the guard!), then place in a small bowl. Add the red wine vinegar and a pinch of sea salt, scrunch together, then set aside to allow the onions to turn pink. Meanwhile, make the rhubarb sauce. Trim the rhubarb, peel and core the apple, then chop both into 2cm pieces. Place the fruit in a pan with the honey, bay leaf and whole cloves. Add a splash of vinegar and the orange juice. Bring to the boil, then turn the heat down to medium. Cover and leave to cook for about 30 minutes, or until the rhubarb has softened. Add a little extra honey to sweeten, if necessary. Tip into a bowl and set aside to cool. To make the mayonnaise, first make a tarragon oil. Pick the tarragon leaves into a blender, add 100ml of oil and blitz to a pulp. Add the rest of the oil and blitz again, then strain through a piece of muslin into a jug. Place the egg yolks in a mixing bowl with the mustard and whisk well. Very slowly drip the tarragon oil into the egg yolk as you whisk; when you’ve added half of the oil, add 1 tablespoon of vinegar, then continue whisking in the oil (you might not need all of it). Finish with a squeeze of lemon juice and a pinch of salt and black pepper. Carefully remove the salmon to a serving board and gently remove the skin. Break up the salmon flesh into lobes and arrange on a large platter, then rub them with a little oil. Pick the herb leaves over the onions and toss well. Serve the poached salmon with the pickled onions, some lovely boiled new potatoes and the rhubarb sauce and tarragon mayo on the side.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/95N2GNVp4Cy9RMPsG_0LGh.jpg",
	},
		
		{
		name: "Easy spelt pizza",
		description: "",
		subtitle:"",
		ingredients: "200 g wholegrain spelt flour , plus extra to dust, 2 teaspoons gluten-free baking powder, ½ tesapoon sea salt, ¼ teaspoon sugar, 100 ml buttermilk, 1 tablespoons sunflower oil, 1 large free-range egg, 1 shallot, quality smoked salmon , from sustainable sources, 150 g ricotta cheese, 50 g rocket, 2 teaspoons baby capers, 1 wedge of lemon",
		Method: "Preheat the oven to 200ºC/gas 6. Combine the flour, baking powder, sea salt and sugar in a bowl. Beat the buttermilk, oil, egg and 100ml water together, then mix the wet ingredients into the dry. On a dusted surface, roll the dough out to 1cm thick. Peel and finely dice the shallot. Bake on a dusted baking tray for 15 minutes, then remove and top with the chopped shallot and the remaining ingredients. Serve with a good pinch of pepper, and the lemon wedge on the side for squeezing over.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/1LPBkF5qKZk8Zjek06UNJQ.jpg",
	},
		


			{
		name: "Frango churrasco",
		description: "“This spicy chargrilled chicken packs a punch – the longer you leave it to marinate, the more intense the flavour. Serve with yoghurt to cool things down, if you like. ”",
		subtitle:"",
		ingredients: "½ bunch of fresh flat-leaf parsley, 4 free-range chicken legs , or 8 thighs, 1 fresh red chillies, 1 lemon, yoghurt , to serve, PIRI PIRI MARINADE, ½ a thumb-sized piece of ginger, 4 garlic cloves, 1 lemon, 60 ml olive oil, ½ tablespoon paprika, ½ tablespoon dried chilli",
		Method: "For the marinade, chop the ginger, then peel and crush the garlic. Finely grate the lime zest into a bowl, then add the lemon juice and the rest of the ingredients. Mix well and then set aside while you prepare your chicken. Pick the parsley leaves and set aside. Finely chop the stalks and add to the bowl. Season and mix well. Add the chicken, massage the marinade into it and leave, covered, for at least 2 hours or overnight. When ready to cook the chicken, preheat your oven to 190C/gas 5 and fire up your barbecue or get a griddle pan heating up on the hob. Wipe most of the marinade from the chicken (reserving it for basting, later) and place the chicken on the barbecue or griddle, skin-side down, until you have crispy, golden skin. Pop the chillies on, char lightly all over, then transfer to a board. Chop with most of the parsley leaves and set aside. Transfer the chicken to a roasting tray, cover with foil and pop in the oven for 35–40 minutes, until the chicken is cooked through. About 15 minutes before the end of cooking, remove from the oven, baste with the remaining marinade and any tray juices and place back in the oven, uncovered, to let it get nice and gnarly. When your chook is nicely cooked, remove it from the oven, dress it with the juice from the remaining lemon, sprinkle over the charred chillies and serve with the yoghurt and parsley.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/E8UeZi6zKt2BIm15Q2c0hQ.jpg",
	},
		
		{
		name: "Gurkha chicken curry",
		description: "",
		subtitle:"",
		ingredients: "8 large free-range skinless chicken thighs, bone in, 1 large onion, 3 potatoes, 4 large ripe tomatoes, ½ a bunch of fresh coriander, vegetable oil, 1 stick of cinnamon, 4 cloves, 1 teaspoon cumin seeds, 3 fresh bay leaves, 1 teaspoon ground turmeric, 1 tablespoon ground coriander, 1 fresh red chilli , optional, MARINADE, 5cm piece of ginger, 1 bulb of garlic, 1 teaspoon fennel seeds, 5 cardamom pods, 1 teaspoon hot chilli powder, 250 ml fat-free natural yoghurt , plus extra to serve, 1 lemon",
		Method: "To make the marinade, peel and roughly slice the ginger, break up and peel the garlic cloves, then add to a dry frying pan over a medium heat, along with the fennel seeds and whole cardamom pods. Heat for 1 minute to wake up all those lovely flavours, then transfer to a pestle and mortar with the chilli powder and 1 pinch of sea salt, then pound into a rough paste. Tip into a large bowl with the yoghurt, lemon zest and juice, and the chicken thighs. Stir to coat evenly, then cover and place in the fridge to marinate for at least 1 hour, but preferably overnight. Preheat the oven to 190ºC/375ºF/gas 5. Peel and finely dice the onions. Peel the potatoes, then chop into rough chunks, along with the tomatoes. Pick the coriander leaves and set aside, then finely chop the stalks. Heat 4 tablespoons of oil in a large, wide ovenproof pan over a medium heat, then add the cinnamon, cloves, cumin seeds and bay. Add the chicken in a single layer and cook for 5 minutes on one side, or until a lovely, golden crust develops. Stir in the ground spices, then add the onion, potatoes, tomatoes and coriander stalks. Turn the chicken over and cook for a further 5 to 10 minutes, or until browned all over. Pour over 350ml of cold water, then bring to the boil. Place in the hot oven for 50 minutes to 1 hour, uncovered, or until the chicken is cooked through and tender, stirring occasionally. Pick out and discard the cinnamon and cardamom pods, then divide between your plates. Finely slice and sprinkle over the chilli (if using), then tear the coriander leaves on top. Serve with a dollop of yoghurt, coconut rice, naan breads and a fresh green salad, if you like.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/35dPmFZH4i2AqpchxVd7pV.jpg",
	},


		{
		name: "Cracking chicken burrito",
		description: "",
		subtitle:"",
		ingredients: "4 skinless, boneless free-range chicken thighs, 1 tablespoon sweet smoked paprika, ½ a tablespoon ground cumin, olive oil, 2 cloves of garlic, 1 bunch of fresh coriander, 1 x 400 g tin of pinto or black beans, 200 g leftover white or brown rice , chilled, 1 lime, 4 ripe tomatoes, 4 spring onions, 1 little gem lettuce, 4 large flour tortillas, 80 g mature Cheddar cheese, 4 tablespoons Greek yoghurt",
		Method: "Preheat a griddle pan over a high heat. Meanwhile, place the chicken thighs between two sheets of greaseproof paper, then bash with the base of a heavy pan to roughly ½cm thick. Pop into a bowl, sprinkle over the paprika, cumin and a lug of oil, and season well with sea salt and freshly ground black pepper. Mix well to coat, then place the chicken onto the hot griddle. Cook for 10 minutes, or until charred and cooked through, turning halfway. Leave to cool slightly. Meanwhile, peel and finely slice the garlic. Pick the coriander leaves and set aside, then finely slice the stalks. Heat 1 tablespoon of oil in a large frying pan over a medium-high heat, add the garlic and coriander stalks and fry for 1 minute. Drain, rinse and add the beans, then fry for a further few minutes. Add the rice and cook for 5 minutes, or until crisp and piping hot through, stirring occasionally. Finely grate in the lime zest, roughly chop and add half the coriander leaves. Stir well and remove from the heat. Roughly chop the tomatoes and trim and finely slice the spring onions, then add to a bowl with the juice of the lime. Roughly chop and add the remaining coriander leaves, mix well and season to taste. Shred the lettuce and cooled chicken. Pop a tortilla onto the griddle for 1 minute to soften, then place onto a board. Spoon one-quarter of the fried rice and beans along the middle, top with a generous spoonful of salsa, a handful of lettuce and one of the shredded chicken thighs. Grate over some cheese and add a spoon of yoghurt. Wrap up the burrito, then tuck in. Repeat with the remaining ingredients, serving as you go.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1572_2_1437661500.jpg",
	},

			{
		name: "Thai green chicken curry",
		description: " ",
		subtitle:"",
		ingredients: "750 g skinless free-range chicken thighs, groundnut oil, 400 g mixed oriental mushrooms, 1 x 400g tin of light coconut milk, 1 organic chicken stock cube, 6 kaffir lime leaves, 200 g mangetout, ½ a bunch fresh Thai basil, 2 limes, CURRY PASTE, 4 cloves of garlic, 2 shallots, 5cm piece of ginger, 2 lemongrass stalks, 4 green Bird's eye chillies, 1 teaspoon ground cumin, ½ a bunch of fresh coriander, 2 tablespoons fish sauce",
		Method: "To make the curry paste, peel, roughly chop and place the garlic, shallots and ginger into a food processor. Trim the lemongrass, remove the tough outer leaves, then finely chop and add to the processor. Trim and add the chillies along with the cumin and half the coriander (stalks and all). Blitz until finely chopped, add the fish sauce and blitz again. Slice the chicken into 2.5cm strips. Heat 1 tablespoon of oil in a large pan on a medium heat, add the chicken and fry for 5 to 7 minutes, or until just turning golden, then transfer to a plate. Tear the mushrooms into even pieces. Return the pan to a medium heat, add the mushrooms and fry for 4 to 5 minutes, or until golden. Transfer to a plate using a slotted spoon. Reduce the heat to medium-low and add the Thai green paste for 4 to 5 minutes, stirring occasionally. Pour in the coconut milk and 400ml of boiling water, crumble in the stock cube and add the lime leaves. Turn the heat up and bring gently to the boil, then simmer for 10 minutes, or until reduced slightly. Stir in the chicken and mushrooms, reduce the heat to low and cook for a further 5 minutes, or until the chicken is cooked through, adding the mangetout for the final 2 minutes. Season carefully to taste with sea salt and freshly ground black pepper. Pick, roughly chop and stir through the basil leaves and remaining coriander leaves. Serve with lime wedges and steamed rice.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1575_2_1437576282.jpg",
	},
		
		{
		name: "Southern fried chicken",
		description: "",
		subtitle:"",
		ingredients: "4 free-range chicken thighs , skin on, bone in, 4 free-range chicken drumsticks, 200 ml buttermilk, 4 sweet potatoes, 200 g plain flour, 1 level teaspoon baking powder, 1 level teaspoon cayenne pepper, 1 level teaspoon hot smoked paprika, 1 level teaspoon onion powder, 1 level teaspoon garlic powder, 2 litres groundnut oil, BRINE, 1 tablespoon black peppercorns, 25 g sea salt, 100 g brown sugar, 4 sprigs of fresh thyme, 4 fresh bay leaves, 4 cloves of garlic, PICKLE, 1 teaspoon fennel seeds, 100 ml red wine vinegar, 1 heaped tablespoon golden caster sugar, ½ red cabbage , (500g)",
		Method: "This is an incredible fried chicken recipe, one that I’ve subtly evolved from that of my dear friend Art Smith, one of the kings of southern American comfort food. I’ve finished the chicken in the oven, purely because you really do need a big fryer to do it properly, as well as for good temperature control, and this method is much friendlier for home cooking. To make the brine, toast the peppercorns in a large pan on a high heat for 1 minute, then add the rest of the brine ingredients and 400ml of cold water. Bring to the boil, then leave to cool, topping up with another 400ml of cold water. Meanwhile, slash the chicken thighs a few times as deep as the bone, keeping the skin on for maximum flavour. Once the brine is cool, add all the chicken pieces, cover with clingfilm and leave in the fridge for at least 12 hours – I do this overnight. After brining, remove the chicken to a bowl, discarding the brine, then pour over the buttermilk, cover with clingfilm and place in the fridge for a further 8 hours, so the chicken is super-tender. When you’re ready to cook, preheat the oven to 190°C/375°F/gas 5. Wash the sweet potatoes well, roll them in a little sea salt, place on a tray and bake for 30 minutes. Meanwhile, make the pickle – toast the fennel seeds in a large pan for 1 minute, then remove from the heat. Pour in the vinegar, add the sugar and a good pinch of sea salt, then finely slice and add the cabbage. Place in the fridge, remembering to stir every now and then while you cook your chicken. In a large bowl, mix the flour with the baking powder, cayenne, paprika and the onion and garlic powders. Just under half fill a large sturdy pan with oil – the oil should be 8cm deep, but never fill your pan more than half full – and place on a medium to high heat. Use a thermometer to tell when it’s ready (180°C), or add a piece of potato and wait until it turns golden – that’s a sign it’s ready to go. Take the chicken out of the fridge, then, one or two pieces at a time, remove from the buttermilk and dunk into the bowl of flour until well coated. Give them a shake, then place on a large board and repeat with the remaining chicken pieces. Turn the oven down to 170°C/325°F/gas 3 and move the sweet potatoes to the bottom shelf. Once the oil is hot enough, start with 2 thighs – quickly dunk them back into the flour, then carefully lower into the hot oil using a slotted spoon. Fry for 5 minutes, turning halfway, then remove to a wire rack over a baking tray. Bring the temperature of the oil back up, repeat the process with the remaining 2 thighs, then pop the tray into the oven. Fry the 4 drumsticks in one batch, then add them to the rack of thighs in the oven for 30 minutes, or until all the chicken is cooked through. Serve with your baked sweet potatoes, cabbage pickle and some salad leaves.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1356_1_1440772046.jpg",
	},


				{
		name: "Beef tacos",
		description: "“This spicy chargrilled chicken packs a punch – the longer you leave it to marinate, the more intense the flavour. Serve with yoghurt to cool things down, if you like. ”",
		subtitle:"",
		ingredients: "1 onion, 1 red pepper, 1 green pepper, olive oil, 2 cloves of garlic, 1 pinch of paprika, 1½ teaspoons cumin, 500 g quality minced beef, 250 ml organic beef stock, 12 corn taco shells, SALSA, 2 ripe tomatoes, 1 spring onion, 3 sprigs of fresh coriander, ½ a lime, GUACAMOLE, 2 ripe avocados, ½ lime, 2 tablespoons crème fraîche",
		Method: "Preheat the oven to 180ºC/gas 4. Peel and dice the onion, then deseed and dice the peppers. Soften in 1 tablespoon of oil in a large pan over a low heat. Peel, finely slice and add the garlic, along with the paprika and cumin, and cook for 1 to 2 minutes. Add the beef and stir until it has browned. Pour in the stock, cover, and cook for 45 minutes, or until reduced and delicious. For the salsa, roughly chop the tomatoes, trim and finely slice the spring onion, then pick and roughly chop the coriander leaves. Combine with the lime juice, then season carefully to taste. For the guacamole, halve and destone the avocados, then mash the flesh with a fork. Squeeze in the lime juice, add the crème fraîche, season, and gently mix it all up. Spread the taco shells out on a baking tray and place in the oven for 3 to 4 minutes until crisp. Fill the shells with the meat, salsa and guacamole or lay everything out and let everyone help themselves.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/9Qnt1LTQKJK8NahW1sV1RY.jpg",
	},
		
		{
		name: "Classic family lasagne",
		description: "",
		subtitle:"",
		ingredients: "2 sprigs of fresh rosemary, 100 g higher-welfare smoked streaky bacon, olive oil, 1 kg quality minced beef, 1 kg higher-welfare minced pork, 4 carrots, 2 onions, 4 sticks of celery, 2 heaped tablespoons tomato purée, 4 x 400 g tins of plum tomatoes, 350 g dried lasagne sheets, WHITE SAUCE, 150 g mature Cheddar cheese, 2 medium leeks, 2 fresh bay leaves, 4 tablespoons plain flour, 1 litre semi-skimmed milk, 1 whole nutmeg , for grating",
		Method: "Strip and finely chop the rosemary leaves and finely chop the bacon. Heat 1 tablespoon of oil in a large casserole pan on a high heat. Once hot, add the rosemary and bacon and fry for 2 minutes, or until the bacon starts to crisp up, stirring regularly. Add all the minced meat, using a wooden spoon to break it up as you go. Reduce the heat to medium and cook for at least 10 minutes, or until all the liquid has evaporated, stirring occasionally. Place the coarse grater attachment in your food processor (or you could use a box grater instead) and grate the Cheddar, then tip into a bowl. Replace the grater with the regular blade. Trim and halve the carrots, then add to the processor and blitz to roughly the same size as the mince. Peel and halve the onions, add them to the carrot and blitz again. Tip into the pan with the mince while you get on with blitzing and adding the celery. Cook for 15 to 20 minutes, or until the vegetables start to soften, stirring regularly. Next, add the tomato purée and plum tomatoes, breaking them up with a spoon. Fill each of the tins with water and tip into the pan. Give everything a good stir and reduce the heat to low. Leave to simmer around 2 hours, or until thickened and reduced, stirring occasionally. While that ticks away, make your white sauce. Trim, wash and finely slice the leeks, then add to a pan along with 2 tablespoons of oil and the bay leaves. Stir well and season with a tiny pinch of sea salt and black pepper. Reduce the heat to low and cook for 30 minutes, or until sweet and softened, adding splashes of water, if needed. Add the flour and stir well to coat, then gradually add the milk, stirring continuously. Turn the heat up to medium, bring to the boil, then reduce to low and cook for 5 to 10 minutes, or until thickened, stirring regularly. Carefully transfer the sauce to the food processor and blitz until smooth and silky. Add half the grated cheese and finely grate over half the nutmeg and mix well. Season to taste. Once the ragù is ready, preheat the oven to 190ºC/375ºF/gas 5. Season the ragù to taste, then transfer half into freezer bags, portioning up as appropriate for your family. Allow to cool to room temperature, then pop in the freezer for another day. It’s a good idea to freeze them flat so that you can reheat them quickly and easily. It’s also a good idea to label and date them to avoid a game of freezer roulette in a few weeks' time! To build your lasagne, spoon a quarter of the ragù into a large deep ovenproof dish (roughly 25cm by 30cm) and spread it out evenly. Spoon over a quarter of the white sauce, then snap over some lasagne sheets, making sure they completely cover the sauce in one layer. Repeat this 3 times, finishing with a layer of white sauce. Sprinkle over the remaining cheese and bake the lasagne in the oven for 45 minutes or until golden and bubbling. Remove the lasagne from the oven and leave to sit for 5 to 10 minutes before serving. Delicious served with a fresh green salad.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1475_6_1432138866.jpg",
	},


		{
		name: "Spaghetti Bolognese",
		description: "",
		subtitle:"",
		ingredients: "2 cloves of garlic, 1 onion, 2 sprigs of fresh rosemary, 6 rashers dry-cured higher-welfare smoked streaky bacon, olive oil, 500 g minced beef, 200 ml red wine, 1 x 280 g jar of sun-dried tomatoes, 2 x 400 g tins of plum tomatoes, 500 g dried spaghetti, Parmesan cheese, extra virgin olive oil",
		Method: "Preheat the oven to 180ºC/350ºF/gas 4. Peel and finely chop the garlic and onions, pick and finely chop the rosemary, then finely slice the bacon. Heat a splash of oil in a casserole pan on a medium heat, add the bacon, rosemary, garlic and onion and cook for 5 minutes, or until softened, stirring occasionally. Add the minced beef, breaking it apart with the back of a spoon, then cook for 2 to 3 minutes, or until starting to brown, then pour in the wine. Leave to bubble and cook away. Meanwhile, drain and tip the sun-dried tomatoes into a food processor, blitz to a paste, then add to the pan with the tomatoes. Stir well, break the plum tomatoes apart a little. Cover with a lid then place in the oven for 1 hour, removing the lid and giving it a stir after 30 minutes – if it looks a little dry at this stage, add a splash of water to help it along. About 10 minutes before the time is up, cook the spaghetti in boiling salted water according to the packet instructions. Once the spaghetti is cooked, drain, reserving a mugful of cooking water, then return to the pan with a few spoons of Bolognese, a good grating of Parmesan and a drizzle of extra virgin olive oil. Toss to coat the spaghetti, loosening with a splash of cooking water, if needed. Divide the spaghetti between plates or bowls, add a good spoonful of Bolognese to each, then serve with a fine grating of Parmesan.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/905_7_1436888802.jpg",
	},

			{
		name: "Eggs benedict",
		description: " ",
		subtitle:"",
		ingredients: "100 g baby spinach, 2 English muffins, 2 large free-range eggs, 1 splash of white wine vinegar, Jules & Sharpie hot pepper jelly or your favourite chilli jam, 20 g cress , optional, CHEAT'S HOLLANDAISE, 2 heaped tablespoons free-range mayonnaise, ½ teaspoon Dijon mustard, 1 splash of white wine vinegar, 15 g Cheddar cheese, TOPPING OPTIONS (CHOOSE ONE), 40 g thinly sliced smoked ham, 50 g picked brown and white crab meat, from sustainable sources, 40 g smoked salmon, from sustainable sources",
		Method: "For the cheat’s hollandaise, set a heatproof bowl over a pan of simmering water and warm the mayo, mustard and vinegar with a splash of water, stirring occasionally. Once combined, grate in the cheese and stir until it melts into the sauce. Taste and season. Keep it warm while you crack on with the rest of the dish. Add the spinach and a splash of water to a pan over a medium heat. Allow the leaves to wilt and cook until all the liquid has evaporated. Meanwhile, halve and toast your muffins. To poach your eggs, bring a pan of water to a light simmer, add a pinch of sea salt and the vinegar, then gently add the eggs to the pan. Depending on your pan, a really soft poached egg should take around 2 minutes; a soft-to-firm one will need 4 minutes. To check if they’re done, remove one carefully from the pan with a slotted spoon and give it a gentle push with a teaspoon – if it feels too soft, put it back in the water for a minute or 2 to firm up. When they’re done, remove them to some kitchen paper to dry off. Spread a thin layer of pepper jelly or chilli jam over the toasted muffins. Top with the spinach, your choice of ham, crab or salmon, an egg and some sauce. Snip over some cress, if you like, too.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/87_mwwAHqdf8uc2sFugLXC.jpg",
	},
		
		{
		name: "Quiche leekraine",
		description: "",
		subtitle:"",
		ingredients: "300 g leeks, olive oil, 3 slices of higher-welfare smoked streaky bacon, 75 g Cheddar cheese, 3 large free-range eggs, 250 ml milk, 1 x 20 cm precooked pastry case, green salad , to serve",
		Method: "Preheat the oven to 180ºC/gas 4. Trim and finely slice the leeks, then sautée with a splash of oil until soft and sticky. Chop the bacon, then fry in a separate pan until golden. Coarsely grate the cheese. Whisk together the eggs, then stir through the cheese, milk, leeks, bacon and a good pinch of seasoning. Place the pastry case onto a baking sheet, then pour the mixture into the case and bake for 25 to 30 minutes, or until golden. Delicious served with a mixed green salad.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/D-d1jLePKYj8uBQSTVo403.jpg",
	},




				{
		name: "Spaghetti atterrati",
		description: "“This spicy chargrilled chicken packs a punch – the longer you leave it to marinate, the more intense the flavour. Serve with yoghurt to cool things down, if you like. ”",
		subtitle:"",
		ingredients: "6 tablespoons extra virgin olive oil, 3 anchovy fillets , from sustainable sources, 1 clove of garlic, 1 fresh red chilli, 2 medium ripe tomatoes, 320 g dried spaghetti, Parmesan cheese , to serve, TOPPING, 4 tablespoons fine breadcrumbs, 6 sprigs of fresh parsley, 50 g walnut havles, 2 tablespoons pine nuts",
		Method: "To make the sauce, heat the oil in a frying pan over a medium heat, add the anchovies and allow to melt. Bash the garlic clove, keeping the skin on. Finely chop the chilli, then add to the pan. Fry for 2 minutes, or until coloured. Roughly chop and add the tomatoes. Simmer over a low heat for 10 to 12 minutes, or until the sauce is thick. Season with a pinch of black pepper. To make the topping, toast the breadcrumbs in a dry frying pan, then tip into a food processor. Roughly chop and add the parsley leaves, then blitz well with the nuts, or chop it all very finely with a knife. Set aside. Cook the pasta until it’s just al dente. Drain, reserving 2 to 3 tablespoons of the water, then tip the pasta into the sauce. Toss well to coat, adding a little of the cooking water to loosen it, if needs be. Serve the pasta in bowls, sprinkled with a generous helping of the topping mixture and a grating of Parmesan.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/64xcNyWCau-80yihFld-ZW.jpg",
	},
		
		{
		name: "World’s most elegant winter pasta",
		description: "",
		subtitle:"",
		ingredients: "400 g pasta, 1 big handful of peas, 1 big handful of broad beans (outer skins removed), ½ a bunch of fresh mint, extra virgin olive oil, 1 lemon, pecorino cheese",
		Method: "Cook the pasta in boiling salted water, according to packet instructions and retain a little of the cooking water. Meanwhile, blanch the peas and broad beans for 2 minutes. Pick and finely chop the mint. Drain, then toss with the pasta, a good drizzle of oil, the lemon juice and zest, half the mint, and a pinch of sea salt and black pepper. Add a good grating of pecorino. Use a little of the reserved cooking water to loosen, if too dry. Top with the remaining mint and some extra pecorino, if you like.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/CaIW2UumqP89ZYr1_w6MRF.jpg",
	},


		{
		name: "Pappardelle with peas, broad beans & pecorino",
		description: "",
		subtitle:"",
		ingredients: "2 cloves of garlic, 1 onion, 2 sprigs of fresh rosemary, 6 rashers dry-cured higher-welfare smoked streaky bacon, olive oil, 500 g minced beef, 200 ml red wine, 1 x 280 g jar of sun-dried tomatoes, 2 x 400 g tins of plum tomatoes, 500 g dried spaghetti, Parmesan cheese, extra virgin olive oil",
		Method: "Preheat the oven to 180ºC/350ºF/gas 4. Peel and finely chop the garlic and onions, pick and finely chop the rosemary, then finely slice the bacon. Heat a splash of oil in a casserole pan on a medium heat, add the bacon, rosemary, garlic and onion and cook for 5 minutes, or until softened, stirring occasionally. Add the minced beef, breaking it apart with the back of a spoon, then cook for 2 to 3 minutes, or until starting to brown, then pour in the wine. Leave to bubble and cook away. Meanwhile, drain and tip the sun-dried tomatoes into a food processor, blitz to a paste, then add to the pan with the tomatoes. Stir well, break the plum tomatoes apart a little. Cover with a lid then place in the oven for 1 hour, removing the lid and giving it a stir after 30 minutes – if it looks a little dry at this stage, add a splash of water to help it along. About 10 minutes before the time is up, cook the spaghetti in boiling salted water according to the packet instructions. Once the spaghetti is cooked, drain, reserving a mugful of cooking water, then return to the pan with a few spoons of Bolognese, a good grating of Parmesan and a drizzle of extra virgin olive oil. Toss to coat the spaghetti, loosening with a splash of cooking water, if needed. Divide the spaghetti between plates or bowls, add a good spoonful of Bolognese to each, then serve with a fine grating of Parmesan.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/9HeKWApM4RD9mXnF7nU8yR.jpg",
	},

			{
		name: "Prawn & courgette spaghetti",
		description: " ",
		subtitle:"",
		ingredients: "2 yellow courgettes, 3 green courgettes, 2 cloves of garlic, 2 fresh red chillies, 1 bunch of fresh dill or flat-leaf parsley, 500 g dried spaghetti (pasta), 1 large knob of unsalted butter, extra virgin olive oil, 600 g raw peeled prawns, from sustainable sources, ½ lemon",
		Method: "Halve the courgettes lengthways, then finely slice at an angle. Peel and finely slice the garlic, then deseed and finely slice the chillies. Pick and roughly chop the herbs. While cooking the pasta, according to the packet instructions, melt the butter with a splash of oil in a large frying pan on a medium heat. Add the courgettes and cook until slightly browned. Add the garlic, chilli and prawns, then cook until the prawns are cooked through. Take off the heat and squeeze over the lemon juice. Drain the pasta once cooked, reserving a little cooking liquid. Add the pasta to the frying pan and toss with the courgettes and prawns. Add some cooking liquid if it looks a little dry, then stir in the dill or parsley. Season to taste and serve at once, with a grating of Parmesan, if you like.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/67VC9qI8qxe8h7Xl9KDt0c.jpg",
	},
		
		{
		name: "Spaghetti carbonara",
		description: "",
		subtitle:"",
		ingredients: "3 large free-range egg yolks, 40 g Parmesan cheese , plus extra to serve, 1 x 150 g piece of higher-welfare pancetta, 200 g dried spaghetti, 1 clove of garlic, extra virgin olive oil",
		Method: "Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente. Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti. Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1558_1_1436795948.jpg",
	},




		{
		name: "Beef & barley bun with horseradish",
		description: "",
		subtitle:"",
		ingredients: "500 g bread flour, 104 g Tipo 00 flour, 44 g sugar, 22 g yeast, 32 g milk, 110 g unsalted butter, BEEF FILLING, 3 Spanish or 5 regular onions, 12 sprigs of fresh thyme, 5 pickled walnuts, olive oil, 500 g minced beef, 200 ml red wine, 200 ml organic chicken stock, 1½ teaspoons minced garlic, 2 fresh bay leaves, 30 g fine oats, 1 star anise, 2 tablespoons pickled walnut juice",
		Method: "Place all the bun ingredients (except the butter) in a bread machine, along with 330g of water and 5g of sea salt. Use a dough hook to combine, then leave the dough to prove for 20 minutes at room temperature. Return the mixture to the machine and add the butter. Use the dough hook to bring everything together. Weigh out the dough into 50g balls and leave to prove for 1 hour. Peel and finely chop the onions, then pick and roughly chop the thyme. Finely chop the pickled walnuts. Place the onions in a pan with a little oil and sweat down over a low heat for 5 minutes, until soft and sweet but not coloured. Preheat the oven to 100ºC/gas ¼. In a cast iron pan or casserole, fry the beef for 10 minutes over a medium-high heat, until it has lots of colour. Deglaze the pan with the red wine. Add the rest of the filling ingredients (except the walnut juice), bring back to the boil, pop the lid on and slow cook in the oven for 4 hours. Season to taste and add the pickled walnut juice. Your beef mixture should be quite moist at this stage, but if it is too loose, remove the lid and reduce it further over a high heat. Leave to cool, divide into golf-ball sized pieces and roll into balls. Preheat the oven to 170ºC/gas 3. Flatten each dough ball, add a ball of beef and mould the dough around it.  Place on a greased and lined baking tray, crease-side down, and bake for 15 minutes, until they rise slightly and turn golden. Best eaten warm.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/D6zj3gCjqtYAdJHteffZCx.jpg",
	},




				{
		name: "Blue cheese & apple burger",
		description: "“This spicy chargrilled chicken packs a punch – the longer you leave it to marinate, the more intense the flavour. Serve with yoghurt to cool things down, if you like. ”",
		subtitle:"",
		ingredients: "750 g quality minced beef, 1 soft round lettuce, 1 punnet of cress, 2 Braeburn or Cox apples, 120 g blue cheese, olive oil, 6 burger buns, American mustard",
		Method: "Make the burgers at least an hour before you want to cook them. Divide the mince into 4 portions and work each ball in your hands for a few minutes to melt the fat and mould them into a relatively smooth, round patty. Make them slightly bigger than your bun, as they will shrink when cooked. Pop them on a tray, cover with clingfilm and chill in the fridge. When you're ready to cook your burgers, get your toppings ready. Pick off, wash and spin dry the lettuce leaves, cut your cress, slice the apples, crumble the blue cheese into chunks, and leave everything to one side. Preheat your grill to high. Pop a large non-stick frying pan over a medium heat and add a drizzle of oil to the pan. Fry the burgers for around 4 minutes on each side if you like them pink in the middle, or longer if you prefer them fully cooked, seasoning the patties with black pepper as you cook them. Halve and toast the buns under the grill or on a hot griddle, then line them up on a board ready to go. When the burgers are cooked, top each with the blue cheese and pop under the grill for a couple of minutes until nice and oozy. Now build your burgers. First layer the salad leaves and apple onto the buns, followed by a good drizzle of mustard. Pop the burgers on, and top with the cress (a cucumber and chilli relish is great here too). Squish the bun tops on and serve straight away.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/6TP7siXmq6m9mtaIavfh1f.jpg",
	},
		
		{
		name: "Mega meatball sub",
		description: "",
		subtitle:"",
		ingredients: "olive oil, 1 small potato, 500 g higher-welfare minced shoulder of pork, 500 g quality minced beef, 4 sprigs of fresh rosemary, 6 submarine rolls, 1 splash of red wine vinegar, 100 g Red Leicester cheese, 50 g watercress, GRAVY, 2 red onions, 1 bulb of fennel, 1 heaped tablespoon plain flour, 1 splash of Porter, 1 litre organic chicken stock, 1 tablespoon HP sauce, 1 tablespoon tomato ketchup, 1 tablespoon Worcestershire sauce, 1 teaspoon English mustard, 1 tablespoon Geeta's mango chutney",
		Method: "Preheat the oven to 200ºC/400ºF/gas 6. Lightly grease a large roasting tray. Peel and coarsely grate the potato, then add to a bowl with the minced pork and beef. Scrunch and mix together, then use wet hands to roll the mixture into balls, slightly larger than a golf ball – you should end up with 21 altogether. Reserving 3 to one side, place the meatballs into the prepared roasting tray, then set aside. To make the gravy, peel and finely chop the onions, trim and finely chop the fennel, then add to a large pan over a medium heat with a good splash of oil. Cook for 10 minutes, or until softened. Add the 3 reserved meatballs, breaking them up in the pan, then cook for a further 10 minutes over a high heat, or until dark golden. Stir in the flour and cook for 2 minutes, then add the Porter and leave to boil and bubble away. Pour in the stock and stir in the remaining ingredients, then bring to the boil. Reduce to a simmer and cook for a further 20 minutes, or until thickened and glossy. Season the meatballs with sea salt and black pepper, then place in the hot oven for 20 to 25 minutes, or until golden and cooked through. Once cooked, remove the tray from the oven and place over a medium heat on the hob. Pour over the gravy, add the rosemary sprigs and simmer for a few minutes. Warm the rolls in the cooling oven. Stir the vinegar into the gravy, grate over the cheese and remove from the heat. Slice the rolls and open them out like a book, spoon in the cheesy meatballs and gravy (discard the rosemary sprigs), top with watercress, then serve with any leftover gravy for dunking.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/3n4aclJmaK59DVDnvWl-Ry.jpg",
	},


		{
		name: "Goulash soup",
		description: "",
		subtitle:"",
		ingredients: "250 g onions, 2 cloves of garlic, 1 green pepper, 2 tomatoes, a few sprigs of fresh marjoram, extra virgin olive oil, 500 g beef shin , cut into small cubes, 1 tablespoon paprika, 1½ litres organic beef stock, ½ tablespoon caraway seeds, red wine vinegar, 1 tablespoon tomato purée, 200 g potatoes, sour cream , optional",
		Method: "Peel and slice the onions, peel and crush the garlic, and deseed and dice the pepper. Finely chop the tomatoes. Pick and finely chop the marjoram. Add a good splash of oil to a large pan and gently sauté the onions, garlic and pepper until softened. Add the beef and continue to cook until the meat is browned and the vegetables are cooked. Stir in the paprika and cook for 2 more minutes, then add 200ml of the beef stock. Bring to the boil and cook until reduced by half. Add the marjoram, caraway seeds, a splash of vinegar, the tomatoes, the tomato purée and season well. Add enough stock to cover and simmer until the meat and vegetables are tender, about 1½ to 2 hours. Peel, dice and add the potatoes, plus any remaining stock and a little water if it’s looking too dry, and simmer until the potatoes are cooked. Serve with a dollop of sour cream, if you like.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/7eDxsrbJK018xB41I4wfko.jpg",
	},

			{
		name: "Poached beef with herb vinaigrette & leeks",
		description: " ",
		subtitle:"",
		ingredients: "6 onions, 6 leeks, 2 tablespoons olive oil, 200 ml white wine, 3 litres organic vegetable stock, 1.25 kg beef-eye fillet , roughly 8cm in diameter, HERB VINAIGRETTE, 1 shallot, 6 cornichons, 1 bunch of fresh coriander, 1 bunch of fresh chives, 1 teaspoon Dijon mustard, 2 teaspoons wine vinegar, 2 teaspoon savora sauce , (see tip), 4 tablespoons rapeseed oil, 1 teaspoon capers",
		Method: "Peel and roughly slice the onions, and trim and halve the leeks lengthways. Heat the olive oil in a flameproof casserole pan over a high heat and cook the onions for 15 minutes, until browned. Deglaze with the white wine, then pour in the vegetable stock. Add the leeks and cook for 30 minutes. Tie the beef with kitchen string at 2cm intervals, then attach it to each end of a wooden spoon to create a handle – the string should be just long enough so that the spoon can be balanced on top of the pan while the beef is submerged in the stock. Lower the beef into the pan and poach over a low-medium heat for 15 minutes for rare (20 for medium, 25 for well done). Take the pan off the heat and transfer the beef to a warm plate. Cover with foil and allow to rest for 5 to 10 minutes. Drain the leeks and keep them warm. Peel and finely chop the shallot, and finely chop the cornichons. Pick and finely chop the herbs. In a bowl, combine the mustard, vinegar, savora sauce and rapeseed oil, then add the shallot, cornichons, capers, and herbs, then season to taste. Slice the beef very thinly, drizzle with the vinaigrette and serve with the leeks on the side.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/DHMjHWPHKE9A0UyBzC-S45.jpg",
	},
		
		{
		name: "Beef empanadas",
		description: "",
		subtitle:"",
		ingredients: "450 g sirloin steak, olive oil, 2 cloves of garlic, 1 large onion, 1 red pepper, 1 fresh red chilli, ½ tablespoon sweet smoked paprika, 1 teaspoon ground cumin, 20 g black olives , stones in, 1 tablespoon tomato purée, 1 large free­-range egg , beaten, 500 g plain flour, 2 teaspoons baking powder, 150 g unsalted butter , chilled",
		Method: "To make the pastry, combine the flour, baking powder and 1 teaspoon of sea salt in a large bowl. Finely chop or coarsely grate the butter, then rub into the dry mix until it resembles fine breadcrumbs. Mix in just enough cold water to bring it together, then wrap in clingfilm and pop in the fridge for 1 hour. Meanwhile, finely chop and add the sirloin with 1 tablespoon of oil to a large non-stick frying pan over a medium-high heat. Fry for 1 to 2 minutes, then remove to a plate. Peel and finely chop the garlic and onion. Deseed and finely chop the pepper and chilli, then add to the frying pan over a medium-low heat. Stir in the paprika and cumin, and fry for 10 minutes, or until softened. Meanwhile, crush the olives with the flat side of your knife, pull out and discard the stones, then finely chop the flesh. Add the purée to the pan and crumble in the stock cube. Fry for a further minute, then add the olives and 100ml of boiling water. Bring to the boil, season lightly with sea salt and freshly ground black pepper. Cook for 8 to 10 minutes over a medium heat, or until the liquid has almost completely evaporated. Return the beef and any resting juices to the pan, stir well, then leave to cool completely. Preheat the oven to 190°C/375°F/gas 5. Divide the pastry into 14 equal pieces, then roll each portion into 14cm circles and the thickness of a pound coin – use a biscuit cutter or saucer for an accurate round. Spoon 2 tablespoons of the filling onto the middle of each pastry round, brush the edges with a little beaten egg, then fold them over the filling to make a semi-circle. Press the edges together with a fork to seal, then place onto a large, lightly greased baking tray. Brush the empanadas with the beaten egg and bake in the hot oven for 25 to 30 minutes, or until golden and crisp. Leave to rest for a few minutes, then serve on a platter.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1570_2_1437661443.jpg",
	},


				{
		name: "Cheese & bacon pinwheels",
		description: "“This spicy chargrilled chicken packs a punch – the longer you leave it to marinate, the more intense the flavour. Serve with yoghurt to cool things down, if you like. ”",
		subtitle:"",
		ingredients: "plain flour , for dusting, 500 g ready-made puff pastry, 2 tablespoons basil pesto, 12 thin slices higher-welfare smoked pancetta, 4 tablespoons grated Parmesan cheese, 1 tablespoon milk, 2 tablespoons sun-dried tomato pesto",
		Method: "Preheat the oven to 180ºC/gas 4 and line a baking tray with greaseproof paper. Lightly dust a work surface with flour and divide the pastry into two evenly sized pieces. Roll one piece of the pastry out to roughly the size of an A4 sheet of paper (no thicker than 2mm), with the longer side nearest to you. Spread the green basil pesto evenly over the pastry, leaving a 1cm border at the top, and lay 8 of the pancetta slices vertically on the pastry. Scatter over half the grated Parmesan and roll the pastry up into a tight spiral cylinder, starting with the longer edge closest to you. Brush the top edge with a little milk to seal and, using a sharp knife, slice the cylinder into 1cm thick pinwheels. Arrange the pinwheels on your lined baking tray, flatten each one slightly with your hand and pop in the fridge to chill while you prepare the remaining pinwheels. Repeat the above steps with the second sheet of pastry but use the red sun-dried tomato pesto in place of green. Bake both batches of pinwheels for about 15 minutes, until crisp and golden. Serve warm.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/54V-R_lK4bsAkoE7vBLB9r.jpg",
	},
		
		{
		name: "Baked paprika cheese",
		description: "",
		subtitle:"",
		ingredients: "Torta del Casar cheese , in box, 2 teaspoons sweet smoked paprika , plus extra for sprinkling, country-style bread , toasted or grilled, to serve",
		Method: "For this recipe we used Torta del Casar, a soft-centered sheep’s milk cheese from Extremadura. If you can’t find it, try similar French or Portuguese cheeses that bake well. Preheat your oven to 180C/gas 4. Cut off the top of the cheese with a knife and sprinkle with the paprika. Place the cheese on a baking tray, pop it in the oven and cook for 15 minutes, until the cheese is very soft and gooey. Transfer it onto a plate and sift over a little extra paprika. Serve the baked cheese immediately with the toasted or grilled bread on the side.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1569_1_1437987257.jpg",
	},


		{
		name: "Cheesy leeks à la Oliver",
		description: "",
		subtitle:"",
		ingredients: "6 large leeks, 2 cloves of garlic, olive oil, 1 knob of butter, 5 sprigs of fresh thyme, 100 ml single cream, 100 g Cheddar cheese, 50 g Parmesan cheese, 100 g brie",
		Method: "Preheat the oven to 180ºC/350ºF/gas 4. Trim, wash and slice the leeks on an angle, about 2cm thick. Peel and slice the garlic. Put a large casserole-type pan (ideally one you’d be happy to serve in) on a medium heat and add a drizzle of oil, the butter, thyme leaves and garlic. As things begin to bubble and fry, stir in the leeks. Leave to cook, and check on it every few minutes to stir and make sure it doesn’t catch. At this point, you have two choices: one is good, one is great. You can either stir the rest of the ingredients into the leeks, grating in the Cheddar and Parmesan, and tearing in the brie. Put it into the oven to cook for 45 minutes uncovered, or, if you want the sweetest leeks in the world (and I think you do), do the following... Turn the heat under the pan down a little and cook the leeks for about 35 minutes, or until soft and intensely gorgeous, stirring every now and then. Season, then spoon it all into a dish, or leave in the pan. Stir in the cream and splash of water, grate over the Cheddar and Parmesan, then pull the brie into parts and bomb those on top. Pop in the oven for 15 minutes, or until golden and bubbling.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/6x6hPDa6axB9_RBm3qpfc-.jpg",
	},

			{
		name: "Bread, watermelon & halloumi salad",
		description: " ",
		subtitle:"",
		ingredients: "6 slices ciabatta, 600 g watermelon flesh, 2 heads of baby gem lettuce, 2 handfuls of frisée lettuce, 50 g green or black olives, 200 g halloumi, POMEGRANATE DRESSING, 1 pomegranate, 30 g walnuts, 1 tesapoon pomegranate molasses, 3 tablespoons extra virgin olive oil",
		Method: "To make the dressing, halve the pomegranate, squeeze out 2 tablespoons of juice into a bowl, then bash out the seeds from half the fruit. Roughly chop and add the walnuts, along with the pomegranate molasses and oil. Combine and set aside. Grill or toast the ciabatta, then tear into chunks. Scoop out and cut the watermelon flesh into chunks, discarding the peel. Separate the gem lettuce leaves, then toss with the frisée lettuce, ciabatta, watermelon and olives. Preheat a griddle or pan. Slice and add the halloumi, then cook on both sides until golden. Add to the salad while still warm, drizzle with the dressing and serve.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/5XX_hHV_KoJAQKEJEgl8-E.jpg",
	},
		
		{
		name: "Toasted cheese sandwich",
		description: "",
		subtitle:"",
		ingredients: "White bread, Unsalted butter, Red Leicester cheese, Cheddar cheese",
		Method: "A toasted cheese sandwich is a beautiful thing, but I’m not messing about here – this is the ultimate one and it’s going to blow your mind. But there is a particular sequence of events that needs to happen in order to achieve the most ridiculously tasty, chomp-worthy sandwich. Follow this recipe, and it will always make you feel good. It is also especially useful when you’re suffering from a light hangover. This is when the condiments – dolloped onto a side plate like a painter’s palette – really come into their own. With the No. 1 toasted cheese sarnie we don’t score any points for buying expensive, artisan bread. It’s important to go for something neutral, and in my eyes, only a white bloomer will do. Lightly butter the bread on both sides (oh, and if you’ve got any leftover mashed potato, spread that across one piece of the bread – it’s insanely good). To one piece of bread, add a nice grating of good-quality cheese that melts well, like Cheddar, Red Leicester or a mixture of the two. Place your second piece of bread on top, then cook in a sturdy non-stick frying pan on a medium heat for about 3 minutes on each side. This is important, because if it gets too coloured too quickly you won’t get the gorgeous ooze and melt in the middle, and this is all about encouraging that internal cheese lava flow. As it cooks, I like to rest something flat with a little weight on top to ensure maximum surface area and crunch. When lightly golden on both sides, lift the toastie out of the pan and grate a little layer of cheese into the pan where it was sitting. Place the toastie back on top and grate some more cheese on the top side. Leave it for just over 1 minute – wait for the cheese to bubble and the fat to spill out of it, then add a little pinch of cayenne pepper. Give the toastie a poke with a fish slice, and once it has a cheesy, doily-like crust on the bottom that moves as one, lift the toastie out of the pan and hold it on the fish slice for 30 seconds so the melted cheese hangs down, sets hard and forms an impressive cheese crown. Flip it onto the other side and once golden, serve, remembering to let it cool for a couple of minutes before attempting to tuck in. The final debate is what do you want on the side? Tomato ketchup, brown sauce, a shake of Tabasco or hot sauce, mango chutney or a mixture? All are fine choices.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/1297_1_1436868428.jpg",
	},

	

			{
		name: "Pork & apple sausage rolls",
		description: "“This spicy chargrilled chicken packs a punch – the longer you leave it to marinate, the more intense the flavour. Serve with yoghurt to cool things down, if you like. ”",
		subtitle:"",
		ingredients: "1 leek, 1 Royal Gala apple, 4 sprigs of fresh thyme, 500 g minced pork, ½ teaspoon mustard seeds, 500 g puff pastry, 1 large free-range egg",
		Method: "Preheat the oven to 200ºC/gas 6. Wash, trim and dice the leek, core and dice the apple, then pick the thyme leaves. Combine the pork, leek, apple, thyme leaves and mustard seeds in a bowl. Season and set aside. Roll out the pastry to 1cm thick and 30 x 34cm. Halve lengthways and place a strip of mince down the centre of each. Brush the edges with beaten egg, roll up and seal. Brush with more egg, then cut each strip into 3 rolls. Score the tops and bake for 20 minutes, or until golden and cooked through.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/3prSAmQJKKH8G0CFw_2UUT.jpg",
	},
		
		{
		name: "Ham & peas",
		description: "",
		subtitle:"",
		ingredients: "3 ham hocks (roughly 2.3kg in total), 2 leeks, 1 celery stalk, 3 carrots, olive oil, 2 fresh bay leaves, 100 g pearl barley, 1 litre organic chicken stock, 400 g frozen peas, ½ a bunch of fresh curly parsley, 1 heaped tablespoon mint sauce",
		Method: "The day before you cook this recipe, soak the ham hocks in a pot of cold water overnight. The next day, drain the hocks, refill the pot with fresh cold water and bring to the boil. Discard the salty water, rinse the hocks, and repeat once more. Trim and finely slice the leeks, celery and carrots in your food processor or using a mandolin. Add the veg to a casserole with a lug of oil, a pinch of sea salt and black pepper, and the bay leaves. Sweat over a medium heat for 15 minutes, or until the veg are soft but not coloured, stirring occasionally. Add the drained ham hocks, pearl barley and chicken stock. Bring to the boil then cook, with the lid on, over a medium-low heat for 3 hours, or until the meat is very tender. Check on it occasionally, and top up with more hot stock or water if it gets too dry. Using tongs, transfer the ham hocks to a clean board and carefully remove all the fat and bones. Shred the meat then return it to the broth. Turn the heat up and add the peas. When they’re tender, pick, finely chop and stir in the parsley along with the mint sauce. Serve with bread and English mustard.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/14d4ZMzEKPp94bbmMRcktB.jpg",
	},


		{
		name: "Scotch quail eggs",
		description: "",
		subtitle:"",
		ingredients: "12 quail eggs, 3 thick higher-welfare sausages, 2 sprigs of fresh thyme, 1 large free-range egg, 100 g breadcrumbs, vegetable oil , for frying",
		Method: "Preheat the oven to 180ºC/gas 4. Cook the eggs in boiling water for 2 minutes, then plunge into cold water and carefully peel. Squeeze the sausage meat into a bowl, discarding the skins, then pick in the thyme. Beat the hen's egg in a shallow bowl, and place the breadcrumbs into another bowl. Divide the sausage mixture into 12 pieces, then shape around the eggs and carefully roll into a round. Roll each round in the beaten egg, then the breadcrumbs until fully coated. Very carefully heat 5cm of oil in a deep pan to 180ºC and very carefully fry the scotch eggs in batches for 1 to 2 minutes, or until golden. Remove with caution and drain on kitchen paper, bake in oven for 5 minutes, then serve.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/9ZfxqMUMaJg8onqnM1gI3f.jpg",
	},

			{
		name: "Maple-glazed pork spare ribs",
		description: " ",
		subtitle:"",
		ingredients: "olive oil, 1.6 kg higher-welfare pork spare ribs, cut into 8 pieces (ask your butcher to do this), 2 onions, 3 large cloves of garlic, 120 ml maple syrup, 3 tablespoons red wine vinegar, 480 ml organic chicken stock",
		Method: "Preheat the oven to 180ºC/gas 4. Season the ribs with sea salt and black pepper. Heat 1 tablespoon of oil in a lidded, ovenproof dish over a medium-high heat. Add the ribs, and brown in 2 batches, on all sides for 7 to 10 minutes. Peel and finely dice the onions. Peel the garlic. Drain any excess oil from the pan, add the onion and garlic and season with salt and pepper. Cook for around 4 minutes, or until the onion begins to brown. Add the maple syrup and bring to the boil, then reduce until the bubbles become slow and thick. Add the vinegar and cook for about 3 minutes, until well reduced. Add the chicken stock, return the ribs to the pan and bring to the boil. Put the lid on and place in the oven for 2 hours, or until the ribs are tender and flake with a fork, turning halfway through, and removing the lid for the last 30 minutes. Check on the ribs regularly to make sure the pan has enough liquid, adding 50ml of water at a time to keep the juices from running dry and burning. Serve the maple-glazed pork with your favourite vegetables.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/2_QsAWOYqMZAJl0AFw7xHE.jpg",
	},
		
		{
		name: "Pigs in blankets",
		description: "",
		subtitle:"",
		ingredients: "12 rasher of higher-welfare smoked streaky bacon, a few sprigs of fresh woody herbs, such as sage, thyme, rosemary, 12 good-quality chipolata sausages, 3 tablespoons Worcestershire sauce, 1-2 teaspoons runny honey",
		Method: "Preheat the oven to 180ºC/350ºF/gas 4.Working one at a time, lay the bacon out on a board and run the sharp side of your knife along the length of the rasher to stretch it out – this will make it even crispier.Dot with a few herb leaves, then place a sausage at one end and roll the bacon around it until it’s totally wrapped up. Place in a roasting tray and repeat till they’re all done.Cook for 30 minutes, or until golden, gnarly and cooked through.Using a fish slice, scrape the pigs in blankets from the bottom of the tray, leaving them in there, then add the Worcestershire sauce and give it a good shake, scraping all that sticky goodness from the bottom of the tray.Drizzle in the honey then place on a medium heat on the hob and bring to the boil until caramelised, shaking continuously to coat. Serve immediately.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/7kQls6BZKQc9B46T_Qpixr.jpg",
	},



		{
		name: "Sausage, kale & ricotta bake",
		description: "",
		subtitle:"",
		ingredients: "1 onion, 2 cloves of garlic, 1 fresh green chilli, olive oil, 1 lemon, 4 higher-welfare sausages, 400 g conchiglie pasta, 200 g kale, 3 sprigs of fresh oregano, 200 g ricotta cheese, 30 g pecorino cheese",
		Method: "Preheat the oven to 180ºC/gas 4. Peel and finely slice the onion, peel and chop the garlic, then dice the chilli. Fry the onion in a large pan in a lug of oil for 5 minutes, or until softened. Add the garlic, chilli and lemon zest, then fry for a couple of minutes. Chop and add the sausages, then cook for 10 minutes until turning golden. Meanwhile, cook the pasta according to the packet directions until al dente. Drain, then toss with 1 tablespoon of oil and pour into a baking dish. Tear the kale into the pan, then pick, chop and stir in the oregano. Cook for 2 minutes. Mix with the pasta, stir through half the ricotta and the lemon juice, and check the seasoning. Top with the remaining dollops of ricotta. Grate over the pecorino, then cover with tin foil and bake for 20 minutes, or until golden and bubbling, removing the foil after 10 minutes.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/3L1Euu4haXS8mo-kNAbr4E.jpg",
	},

	{
		name: "Squash mash & sausage Catherine wheels",
		description: "",
		subtitle:"",
		ingredients: "1 large butternut squash, 12 higher-welfare chipolata sausages , linked together, a few sprigs of sage, extra virgin olive oil, 1 large knob of unsalted butter, 1 large pinch of cumin seeds, 1 whole nutmeg , for grating, 4 eating apples , such as Cox’s or Braeburn, olive oil",
		Method: "Peel the squash, then cut in half and get the kids to scoop out the seeds – these can be roasted later. Cut squash into even chunks and cook in a pan of boiling salted water for about 30 minutes, until soft (to check, insert a knife into the flesh). Drain in a colander, and allow to steam dry for a few minutes. Preheat the oven to 190ºC/gas 5. While the squash is cooking, ask the kids to untwist the sausage links, then shape into 2 coils. Get them to pick and poke sage leaves into the sausage coils at intervals. Stick wooden skewers through the coils to keep them intact. When it’s cooled a little, the children can mash the squash with a drizzle of extra virgin olive oil, the butter, cumin and a good grating of nutmeg, then season with sea salt and black pepper, to taste. Cut the apples into wedges, then pop the sausages and apples on a baking tray with any extra sage leaves – and the seeds from the squash, if you like. Drizzle with olive oil, then bake for 30 to 35 minutes, until the sausages are golden and crispy, and the apples golden and soft. Cut the sausages into wedges and serve with the roasted apples, the squash mash, gravy or chutney, and some steamed green beans or broccolini.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/1OtzJkvIKOrAEU8tb1XRPT.jpg",
	},

	{
		name: "Deep-pan pizza",
		description: "",
		subtitle:"",
		ingredients: "650 ml lukewarm water, 1 x 7 g sachet of dried yeast, 1 tablespoon golden caster sugar, 1 level tablespoon fine sea salt, 1 kg strong white bread flour , plus extra for dusting, FOR THE TOMATO SAUCE:, a swig of white wine vinegar, 1 clove of garlic , peeled, a handful of fresh basil leaves, 1 x 400 g tin of chopped tomatoes, sea salt and freshly ground black pepper, FOR THE TOPPINGS:, olive oil, 3 red onions , peeled and finely sliced, a few sprigs of fresh thyme , leaves picked, 4 higher-welfare pork sausages , the best quality you can afford, 1 dried red chilli, 1 teaspoon fennel seeds, a good pinch of dried oregano, 100 g fresh buffalo mozzarella, a handful of fresh basil leaves, 2 fresh red chillies , finely sliced, 2 large handfuls of freshly grated Parmesan cheese, 12 slices of higher-welfare pancetta",
		Method: "Until recently, I’d always seen this type of pizza as a slightly greedy way of bulking out crusts and toppings. I hadn’t realized Italian immigrants had cleverly adapted their old-world recipes to suit new-world coalfired ovens. Making pizzas in tins to protect the base from the soot of the oven makes perfect sense to me now, and I can honestly say that when it’s cooked and seasoned with proper love and care, I’m more than happy with this representative of the pizza family. To make your dough, pour your lukewarm water into a large bowl and use a fork to stir in the yeast, sugar and salt. Add your flour, bit by bit, until it comes together. You want smooth springy dough, so keep adding a bit more flour if necessary. Dust a clean surface with flour, then knead the dough with your hands. When you’re happy with the consistency, pop it into a flour-dusted bowl, cover with a damp cloth and leave in a warm room until the dough has almost doubled in size. Meanwhile, put a lug of olive oil into a large pan on a medium heat. Add your sliced onions and thyme leaves and cook for 15 minutes, or until softened and golden. Take the pan off the heat and put aside. Put all the tomato sauce ingredients into a food processor or liquidizer with a good pinch of salt and pepper and blitz to a purée. Have a taste and season carefully, adding a bit more salt and pepper if it needs it. Slit the sausages open and squeeze the meat into a bowl. Bash up the dried chilli and fennel seeds in a pestle and mortar, add these to the meat with the dried oregano and mix well with a fork. Preheat your oven to 200ºC/400ºF/gas 6. Divide the dough in half and oil 2 trays (about 25 x 35cm) with olive oil. Use a rolling pin or clean hands to flatten and stretch the dough out. Roll or push the dough around each tray and really push it into the corners so you get a chubby crust and a base about 1cm thick. Divide your blitzed tomato sauce between the pizzas and spread around. Scatter over the caramelized onions and dot small pinches of the sausage mixture around the top of each pizza. Tear up the mozzarella and dot the pieces over the sausage, then sprinkle over the fresh basil leaves, sliced fresh chilli, a good pinch of salt and pepper and the grated Parmesan. Finally let your slices of pancetta sort of fall on to the pizzas so they curl and crisp up as they cook. Place in the bottom of the oven for about 20 minutes so the base gets nice and crispy while the top is cooking. Once your pizzas are beautifully cooked, serve right away with a fresh green lemony salad.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/970_1_1439299335.jpg",
	},

	{
		name: "Arrosto misto",
		description: "",
		subtitle:"",
		ingredients: "1 bulb of garlic, ½ a bunch of fresh thyme, olive oil, 1 x 1.8 kg free-range chicken, 1 lemon, 1 x 2 kg duck, 1 stick of cinnamon, ½ a bunch of fresh sage, 4 bulbs of fennel, 6 red onions, 8 sturdy sprigs of fresh rosemary, 2 pigeons, 2 partridges, 2 quails, 500 g quality sausages in one string, 1 handful of fresh bay leaves, 1 tablespoon plain flour, 150 ml chianti, 1 x 400 g tin of plum tomatoes, 300 ml organic chicken stock, GREMOLATA, ½ a bunch of fresh flat-leaf parsley, 2 cloves of garlic, 1 lemon, POLENTA, 250 g polenta, 100 g unsalted butter, 150 g Parmesan cheese",
		Method: "Preheat the oven to full whack. Peel and add 3 cloves of garlic to a pestle and mortar, pick in half the thyme leaves and bash well with a good splash of oil and a good pinch of sea salt and black pepper. Rub the paste all over the chicken, making sure to get into all the nooks and crannies. Halve the lemon and place in the chicken cavity along with the remaining thyme sprigs. Season the duck all over, rub in a good drizzle of oil, then finely grate over half the cinnamon stick. Place the remaining stick in the cavity along with the sage. Place the chicken and duck on the top shelf of the hot oven, directly onto the bars. Reserving the fronds, trim and halve the fennel, then add to a large roasting tray with the whole, unpeeled onions and garlic bulb. Place on the shelf underneath the birds. Turn the oven temperature down to 180ºC/350ºF/gas 4 and cook for 1 hour 20 minutes, or until the chicken is tender and the juices run clear when pierced. Pick the leaves from 2 rosemary sprigs into the pestle and mortar (there’s no need to wash it first), then bash and bruise with a good splash of oil. Season the pigeons, partridges and quails all over with salt and pepper and drizzle with the rosemary oil. Gently untwist the links between the sausages and push the meat along to make one long sausage. Start by curling one end in, then twirl the sausage round itself in a spiral until you have one big circle of sausage. Place a few bay leaves in between the spirals. Sharpen the ends of the rosemary sprigs, then use them to skewer and secure the sausages in place. Drizzle with oil. Once cooked, remove the chicken to a plate, cover with tin foil and a clean tea towel, then leave to rest. Place the small birds directly on the oven shelf next to the duck. Place the sausage wheel on top of the roasting vegetables, then cook along with the birds for 30 minutes, or until the birds are tender and cooked through. To make the gremolata, pick and finely chop the parsley leaves, peel and finely chop the garlic, then place into a bowl with the reserved fennel fronds. Finely grate over the lemon zest and add a squeeze of lemon juice. Mix well. Once cooked, remove the birds from the oven and leave to rest. Move the roasting tray to the top of the oven and cook for a further 15 minutes. To make the polenta, bring 1.1 litres of water to the boil in a large pan. Once boiling, gradually add the polenta, whisking continuously until combined. Continue to stir over the heat for 15 to 20 minutes, or until oozy, thickened and smooth. Place the cooked veggies on a plate, then skim away and discard the fat from the tray. Pop the tray on a medium heat on the hob, stir in the flour for 1 minute, then pour in the chianti. Scrape up all that lovely goodness from the bottom of the tray, then add the plum tomatoes, any resting juices from the chicken and the stock. Bring to the boil, then reduce to a simmer for 5 minutes, or until thickened and reduced to a lovely gravy. Stir the butter into the polenta and finely grate in the Parmesan, adding a little water to loosen, if needed. Season to taste. Carve up the birds and slice the sausage, squeeze the onions and garlic out of their skins, then serve it all up on a board with the polenta. Scatter the gremolata on top and serve the gravy and some steamed greens on the side.",
		img: "http://cdn.jamieoliver.com/recipe-database/430_575/CoxKCGqk4BbAfwvTDU9FPV.jpg",
	},

	{
		name: "Quick steamed treacle pudding",
		description: "",
		subtitle:"",
		ingredients: "butter , for greasing, 175 g plain flour , sifted, 50 g soft dark brown sugar, 75 g vegetable suet, 1 teaspoon bicarbonate of soda, 2 teaspoons ground ginger, 1 free-range egg, 1 tablespoon golden syrup , plus extra for the basin, 1 small orange , finely grated zest and juice of, ½ teaspoon vanilla extract, 150 ml milk, cream or custard , to serve",
		Method: "Grease a 1 litre pudding basin well with butter. Mix all the ingredients together in a bowl. Pour some extra golden syrup into the pudding basin (about 5 tablespoons) and pour the mixture in on top of it. Cover the pudding with a pleated sheet of greaseproof paper and tie in place with string. Cook on the medium setting of your microwave (750W) for 12 minutes. Let it stand for 10 minutes before turning out. Serve with cream or custard.",
		img: "http://cdn.jamieoliver.com/recipe-database/oldImages/430_575/671_1_1436880614.jpg",
	},


]



		

var categories = [
{ name: "Vegetables", cookierate: 0 },
{ name: "Eggs", cookierate: 0 },
{ name: "Chicken", cookierate: 0 },
{ name: "Pasta", cookierate: 0 },
{ name: "Fish", cookierate: 0 },
{ name: "Bread", cookierate: 0 },
{ name: "Lamb", cookierate: 1 },
{ name: "Fruit", cookierate: 0 },
{ name: "Beef", cookierate: 1 },
{ name: "Cheese", cookierate: 0 },
{ name: "Pork", cookierate: 1 },
{ name: "Rice", cookierate: 0 },
{ name: "Turkey", cookierate: 0 },
{ name: "Goose", cookierate: 0 },
{ name: "Seafood", cookierate: 0 },
{ name: "Chocolate", cookierate: 0 },
{ name: "Game", cookierate: 0 },
{ name: "Duck", cookierate: 0 },
{ name: "Avocado", cookierate: 0 },
{ name: "Sausage", cookierate: 0 },
{ name: "Salmon", cookierate: 0 },
{ name: "Quinoa", cookierate: 0 },
{ name: "Courgette", cookierate: 0 },
{ name: "Aubergine", cookierate: 0 },
{ name: "Couscous", cookierate: 0 },
{ name: "Mince", cookierate: 0 },
{ name: "Kale", cookierate: 0 },
{ name: "Potato", cookierate: 0 },
{ name: "Spinach", cookierate: 0 },
{ name: "Lentil", cookierate: 0 },
{ name: "Rhubarb", cookierate: 0 },
{ name: "Scallops", cookierate: 0 },
{ name: "Halloumi", cookierate: 0 },
{ name: "Steak", cookierate: 0 },
{ name: "Tofu", cookierate: 0 },
{ name: "Mackerel", cookierate: 0 },
{ name: "Mushroom", cookierate: 0 },
{ name: "Beetroot", cookierate: 0 },
{ name: "Leek", cookierate: 0 },
{ name: "Cauliflower", cookierate: 0 },
{ name: "Chorizo", cookierate: 0 },
{ name: "Pumpkin", cookierate: 0 },
{ name: "Asparagus", cookierate: 0 },
{ name: "Broccoli", cookierate: 0 },
{ name: "Tuna", cookierate: 0 },
{ name: "Gammon", cookierate: 0 },
{ name: "Apple", cookierate: 0 },
{ name: "Seabass", cookierate: 0 },
];


recipes.forEach(function(d,i) {
	d.id = i;
})

var foods = [
	{ name: "Apple" },
	{ name: "Breads" },
	{ name: "orange" }
]



app.get('/api/categories', function (req, res) {

	res.send(categories);
});


app.get('/api/foods', function (req, res) {

	res.send(foods);
});



app.get('/api/recipes', function (req, res) {


	res.send(recipes);
});



app.post('/api/add', function (req, res) {

	// add to list of recepies
	res.send('successfully added a recepie')
});


app.get('/api/recipe', function (req, res) {


	console.log('req.query', req.query);

	res.send([recipes[req.query.id]]);
});



server = app.listen(PORT);

var host = server.address().address
var port = server.address().port

console.log("muncher rest server listening on port %s", port);