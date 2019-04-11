# Project 3 - Design Journey

**For each milestone, complete only the sections that are labeled with that milestone.**

Be clear and concise in your writing. Bullets points are acceptable.

## Milestone 1

## Target Audience (Milestone 1)

[Who is your site's target audience? This should be the original target audience from Project 1 or Project 2.]

This site's target audience consists of local college students who have heard of Applefest from their friends or have previously attended. They are also non-seniors who will be returning next fall or plan on coming back to visit and going to Applefest again next year.

## Planning & Designing User Input (Milestone 1)

[Determine what purpose the form for your site will accomplish, where it will go (physical placement on page and the HTML file name), and what form elements you plan on using.]

This feedback form will record recommendations and input from people who went to Applefest this year in order to be able to improve upon next year's Applefest. It will go on a separate page as feedback.html. This is because if people have feedback to give, none of the navigation elements indicate a place for this kind of submission. The most likely nav element it would fall under would be "About," but users may not expect there to be a feedback form there and may assume that there is not any feedback form on the website in general. So, I will separate the feedback form on a separate page with the nav "Feedback" so users know that it exists and is easily accessible. I want to include the following elements:
- days attended (checkbox)
- likes/dislikes (multi-line text)
- suggested improvements (multi-line text)
- vendor request (multi-line text)
- performer request (multi-line text)
- other (multi-line text)


[Include sketches on your form below. Include sketches of your mobile and desktop versions. Image must show in Atom's Markdown Preview, otherwise 0 points for sketch. (Remember your relative URL should be case sensitive.)]

![](form.jpg)

[What submission method will your form use? GET or POST. Explain your reasoning.]
This form will have a POST submission method. Since the form is to obtain feedback from people who had attended the festival, this information is to only be used by those who run Applefest. Sharing information/feedback in which discusses issues with the festival for particular people could be bad for media and not necessary for others to know. For vendor/performer requests, those who are running Applefest, and therefore can see form submissions, can use this information up to their own discretion to then contact groups and vendors that have been requested themselves.


## Determine the Form Validation Criteria (Milestone 1)

[For each control in your form, specify the validation criteria and your reasoning behind the criteria.]

1. What days did you attend?
  - Control: checkbox
  - Required
  - Constraints: days that Applefest occurred
  - Reasoning: This is a required field since most people probably would not fill it out otherwise, but it may be necessary to know which day a specific issue occurred to give more context to the issue to be better able to accommodate for it next year; used checkbox so that users can select multiple if they went on more than one day. Won't need to implement constraints through feedback since checkboxes allow me to choose the dates that Applefest occurred, such that users can only choose from the valid answers.


2. What did you like/dislike about the Apple Harvest Festival?
  - Control: multi-line text
  - Required
  - Constraints: none
  - Reasoning: Want at least one required field other than days attended so that the form can ensure that something of substance was submitted in case a user submits by mistake. This is a very general feedback question in which would be required so that people can give some kind of feedback and can easily answer this form field with a lot of flexibility of for answers, so even if they didn't intend to write something related to this particular question, they can still easily come up with something that could also potentially be helpful. Multi-line text because people may have a lot to say.


3. Do you have any suggested improvements?
  - Control: multi-line text
  - Not required
  - Constraints: none
  - Reasoning: People may not necessarily have improvements to suggest, but just general feedback they want to provide; multi-line gives them room to justify suggestions or include multiple recommendations if they happen to think of any while filling out the form


4. Request Vendors
  - Control: single line text
  - Not required
  - Constraints: none
  - Reasoning: People may not have vendors to request for the next Applefest so it is not required; single line so people can give multiple vendors if they want, but should take up less space than improvements/general feedback; no constraints because there is no way to predict which vendors they want to request


5. Request Performers
  - Control: single line text
  - Not required
  - Constraints: none
  - Reasoning: Same as vendor request


6. Other Comments
  - Control: multi-line text
  - Not required
  - Constraints: none
  - Reasoning: People may have other feedback they want to give which does not fall under the other general fields, so this gives them a place to give such notes; there aren't any constraints as it is an open-ended field and should not be required since it is not necessary for the form's purpose, but may be helpful when obtaining feedback

## Design Form Feedback (Milestone 1)

[Include sketches of your mobile and desktop feedback.]

![](feedback.jpg)

##  Plan Validation Pseudocode (Milestone 1)

[Write your form validation pseudocode here.]

When the user tries to submit the form:
- If no date is selected,
  - Show message "Please select day(s) you attended the Apple Harvest Festival"
  - Do not submit form
- Otherwise,
  - Show no error message

- If likes/dislikes is empty:
  - Show message "Please let us know of anything you liked/disliked about the festival"
  - Do not submit form
- Otherwise,
  - Show no error message

- If no errors,
  - Submit form
- Otherwise:
  - Do not submit form


## Additional Information (Milestone 1)

[(optional) Include any additional information, justifications, or comments we should be aware of.]
The pseudocode accounts for all constraints I am implementing on the form, making sure that users properly fill out the required form fields (date and likes/dislikes). The other form fields are not required and do not have any constraints, so those would fall under "no errors" if filled out by the user. I will make any feedback messages red and also italicized so that the messages are visually accessibly and distinguished for users to be able to see which fields they must fill out.

## Final Submission

### Task Planning (Final Submission)

[Plan out your one task for the Final Submission here before doing your user testing.]

You went to Applefest on September 28 and thought your favorite food truck was going to be there but was disappointed when they weren't. You want to contact the Applefest staff to address this.

### Participant 1 (Final Submission)

1. Who is your participant, e.g., what is their name, where do they comes from, what is their job, characteristics, etc.?

Ananya is a freshman at Cornell University from Ohio. She is in an a cappella group on campus and is studying Biology and Statistics. She is super excited to be at this school and enjoys exploring Ithaca in her free time. She went to Applefest this year and plans to go back next year.

2. Does your participant belong to your target audience of the site? (Yes / No)

[If “No”, what’s your strategy of associating the user test results to your target audience’s needs and wants? How can your re-design choices based on the user tests make a better fit for the target audience?]

Yes


### User Testing for Participant 1 (Final Submission)
[Report the results for your user's performance on each of your tasks. You should **describe the task** you ask the user to complete, explain **what the user did**, describe the user's **reaction/feedback** to the design, **reflect on the user's performance**, determine what **re-design choices** you will make. You can also add any additional comments in the **memo** field.]

Format:
- Task #1
  - **Task Description** (What was the task for this user?)
    - You went to Applefest on September 28 and thought your favorite food truck was going to be there but was disappointed when they weren't. You want to contact the Applefest staff to address this.
  - **How did the user do? Did that meet your expectation?**
    - Went to feedback page
    - Selected date, filled out improvements, filled in vendor request
    - Tried to submit but could not because she did not fill out the general likes/dislikes
    - Saw feedback, filled out, submitted correctly
    - Met all expectations - filled out properly and responded well to feedback
  - **User’s reaction / feedback to the design** (e.g., specific problems or issues found in the tasks)
    - Easy to follow feedback
    - Would have been nice to have known which fields are required
  - **Your reflections about the user’s performance to the task**
    - I think it could be easier for the user to indicate which fields are required and which aren't
  - **Re-design choices**
    - Add placeholder text to general likes/dislikes to distinguish it from the other form fields to show that it is required
    - Encourages users to fill out that specific form field
  - **Memo** (Justify your decisions; additional notes.)
    - Placeholder text might be a nicer way to indicate that the field is required without having to explicitly have "required"
    - Will make the placeholder text a lighter color and italicized so that users know that it is there, without being too prominent

[Include evidence that you conducted user testing.]

![](ananya.jpg)

### Participant 2 (Final Submission)

1. Who is your participant, e.g., what is their name, where do they comes from, what is their job, characteristics, etc.?

Flora is a sophomore at Cornell University studying Information Science. She is from New Jersey and is involved in her social sorority. She went to Applefest this year and plans on going again next year.

2. Does your participant belong to your target audience of the site? (Yes / No)

[If “No”, what’s your strategy of associating the user test results to your target audience’s needs and wants? How can your re-design choices based on the user tests make a better fit for the target audience?]
Yes

### User Testing for Participant 2 (Final Submission)
[Report the results for your user's performance on each of your tasks. You should **describe the task** you ask the user to complete, explain **what the user did**, describe the user's **reaction/feedback** to the design, **reflect on the user's performance**, determine what **re-design choices** you will make. You can also add any additional comments in the **memo** field.]

Format:
- Task #1
  - **Task Description** (What was the task for this user?)
    - You went to Applefest on September 28 and thought your favorite food truck was going to be there but was disappointed when they weren't. You want to contact the Applefest staff to address this.
  - **How did the user do? Did that meet your expectation?**
    - Went to feedback first
    - Checked off date
    - Did not fill out likes/dislikes
    - Filled out vendor request
    - Tried to submit and saw error message, added something to likes/dislikes
    - Did not meet expectations - user did not respond to placeholder text
  - **User’s reaction / feedback to the design** (e.g., specific problems or issues found in the tasks)
    - Thought form was straightforward and easy to understand feedback
  - **Your reflections about the user’s performance to the task**
    - I think it was self-explanatory and easy to follow
    - Feedback messages functioned as supposed to
    - Could still make required fields more obvious
  - **Re-design choices**
    - Add asterisks to required field labels
  - **Memo** (Justify your decisions; additional notes.)
    - It is common on forms to have asterisks at the end of questions in which are required to be filled out in order to complete a form
    - Adding them to the end of the question would make help it more obvious that it is required to the user, in which would reduce time wasted not realizing they had not filled out a required part of the form

[Include evidence that you conducted user testing.]
![](flora.jpg)

### Additional Users...

[If you conduct more user tests of your website, include your tests here. You are not *required* to conduct these additional tests, but you might find them helpful for refining your website.]


### Additional Design Justifications (Final Submission)

[If you feel like you haven’t fully explained your design choices in the final submission, or you want to explain some functions in your site (e.g., if you feel like you make a special design choice which might not meet the final requirement), you can use the additional design justifications to justify your design choices. Remember, this is place for you to justify your design choices which you haven’t covered in the design journey. Use it wisely. However, you don’t need to fill out this section if you think all design choices have been well explained in the final submission design journey.]
I placed the feedback messages right under the form field and adding margins below them such that the message is grouped with the field and it is obvious to the user which field they must fill out. I did not add any feedback message by the submit button when a form was not properly filled out because the feedback messages that show up are easy to see since it is a short form and adding more text could make the page more cluttered and overwhelm the user more, making them think they did a lot wrong.
