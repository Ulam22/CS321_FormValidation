# Form Validation Project
**Team**: 3 
<br> Hannah Peterson, Katie Wind, Shania Ambros<br>
**Class**: CS321
**Semester**: Spring 2021
<br>
**Languages used**: HTML, CSS, Javascript
<br>
[Try our project](https://ulam22.github.io/CS321_FormValidation/ )

## Planning Document
View our [Planning Document](https://docs.google.com/document/d/1YK8Cq6o9L70t9Wto31Hj_mCAFBjTy_5IRvR0frBMNMc/edit?usp=sharing) to get a detailed look into our process
![First half of our form design mockup](https://user-images.githubusercontent.com/67839745/110392217-961cef00-8036-11eb-9a9a-30799cd155d6.jpg)

### What worked
- Following the form mockup
- Adding aria identifiers
- Splitting or combining drop-down list for states and provinces: used optgroups to create separate groups within the dropdown 
- Using aria-hidden="true" to hide asterisks from screen readers
- Confirm passwords match when entered twice: used a onkeyup function to check that text matched as user typed 
- Added in regex patterns to confirm input for phone numbers and home address 
- Styling the form to somewhat resemble American Airlines


### What didn't work
I think everything worked out well in the end. We were able to add in visual cues for missing information but also didn't rely on color to notify users about any invalid inputs.

![popup](https://user-images.githubusercontent.com/67839745/110392602-33782300-8037-11eb-8049-669aee179d00.jpg)

### Challenges
Validating Canadian and American zipcodes with regex, but we found a response in stack overflow that helped solve that issue.
![03](https://user-images.githubusercontent.com/67839745/110393185-1db72d80-8038-11eb-8de0-675975cc7ec3.jpg)
![01](https://user-images.githubusercontent.com/67839745/110393187-1e4fc400-8038-11eb-872f-a2faa5182deb.jpg)
![02](https://user-images.githubusercontent.com/67839745/110393188-1e4fc400-8038-11eb-8ae1-83800ade856f.jpg)


## Links
- Final Form: [Try our project](https://ulam22.github.io/CS321_FormValidation/ )
- [Chapter 4 Table of Contents](http://web.simmons.edu/~menzin/CS321/Unit_2_JavaScript_and_HTML_Forms/Chapter_4_Forms_and_Event_Handlers/)
