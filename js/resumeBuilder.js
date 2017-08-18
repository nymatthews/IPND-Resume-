// This JavaScript object defines my biographical properties and values.
var bio = {
  "name": "Copa Matthews",
  "role": "Web Developer",
  "contacts": {
    "mobile": "202-555-5555",
    "email": "copa@nanodegree.com",
    "github": "nymatthews",
    "location": "Maryland"
  },
  "welcomeMessage": "Hello everyone! Welcome to my interactive resume.",
  "skills": ["Self-managed", "Results-oriented", "Detail-oriented", "Exceptional"],
  "biopic": "images/mario.png",
};

// This JavaScript object defines my educational properties and values.
var education = {
  "schools": [
    {
      "name": "University of Maryland University College",
      "location": "Adelphi, MD",
      "degree": "Masters",
      "majors": ["Informatics - IT"],
      "dates": "December 2007 - May 2013",
      "url": "https://www.umuc.edu"
    },
    {
      "name": "The George Washington University",
      "location": "Washington, DC",
      "degree": "BA (Business Administration)",
      "majors": ["Marketing", " Minor: Psychology"],
      "dates": "September 1992 - May 1996",
      "url": "https://www.gwu.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Introduction to Programming",
      "school": "Udacity",
      "dates": "February 2017 - August 2017",
      "url": "https://www.udacity.com"
    }
  ]
};

// This JavaScript object defines my work properties and values.
var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Senior Specialist - Network Support",
      "location": "Hanover, MD",
      "dates": "11/2002 - Present",
      "description": "Provide local and remote telephony support to 2 business offices & 6 engineering sites by programming, administering and maintaining internal telephone & voicemail systems."
    },
    {
      "employer": "Cingular Wireless",
      "title": "IT Analyst - Network Services",
      "location": "Greenbelt, MD",
      "dates": "10/2001 - 11/2002",
      "description": "Supported LAN/WAN environments for the Northeast Regional Headquarters and 56 retail locations by configuring, installing, and monitoring Cisco network equipment and administering IP addresses."
    },
    {
      "employer": "Cingular Wireless",
      "title": "IT Analyst - Desktop Support",
      "location": "Greenbelt, MD",
      "dates": "11/1999 - 10/2001",
      "description": "Provided desktop support to approximately 1,000 end users (in-house and remote) for all company software applications and hardware systems."
    },
    {
      "employer": "CellularONE",
      "title": "Help Desk Administrator",
      "location": "Greenbelt, MD",
      "dates": "1/1998 - 11/1999",
      "description": "Administered user accounts for all company systems including, but not limited to: Windows NT, Citrix Metaframe, Remote Access Services, Macrocell billing system, and Compass Point-Of-Sale system."
    }
  ]
};

// This JavaScript object defines my project properties and values.
var projects = {
  "jobs": [
    {
      "title": "Cost Savings & Avoidance",
      "dates": "ongoing",
      "description": "Reduce costs and expenditures by reusing existing and inventoried equipment, performing service work in-house, conducting periodic usage audits, and disconnecting unused circuits/services.",
      "images": "images/costsavings.jpg" /* This image was found on the web at URL
      http://images.clipartpanda.com/money-clipart-aTepRo6T4.jpeg */
    },
    {
      "title": "Skype/Cisco UC Conversion",
      "dates": "2017",
      "description": "Convert headquarters site voice standard to Skype for Business and Cisco Unified Communications.",
      "images": "images/voip.png" /* This image was found on the web at URL
      https://conceptdraw.com/a1799c3/p27/preview/640/pict--ip-phone-telecommunication-networks---vector-stencils-library.png--diagram-flowchart-example.png */
    },
    {
      "title": "Headquarters Relocation",
      "dates": "2008",
      "description": "Oversee relocation project of approximately 250 users to Hanover Business Office that consisted of telephony infrastructure setup & decommissioning, phone & voicemail programming, and number allocation.",
      "images": "images/headquarters.png" /* This image was found on the web at URL
      http://images.clipartpanda.com/headquarters-clipart-building12.png */
    }
  ]
};

/*
This function iterates through my bio object, swaps out the placeholder text for
the property values, and appends those property values to the header, skills,
topContacts, and footerContacts sections of the index.html resume file to display.
*/
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#skills").prepend(formattedPic);
  $("#skills").prepend(formattedWelcomeMsg);
  $("#topContacts").append(formattedContacts);
  $("#footerContacts").append(formattedContacts);
  $("#skills").append(HTMLskillsStart);
  for (i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
};

/*
This function iterates through my work object, swaps out the placeholder text for
the property values, and appends those property values to the workExperience
section of the index.html resume file to display.
*/
work.display = work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedWorkExperience = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
    $(".work-entry:last").append(formattedWorkExperience);
});

/*
This function iterates through my projects object, swaps out the placeholder text
for the property values, and appends those property values to the projects section
of the index.html resume file to display.
*/
projects.display = projects.jobs.forEach(function(job) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", job.title);
    var formattedDates = HTMLprojectDates.replace("%data%", job.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", job.description);
    var formattedImage = HTMLprojectImage.replace("%data%", job.images);
    var formattedProjects = formattedTitle + formattedDates + formattedDescription + formattedImage;
    $(".project-entry:last").append(formattedProjects);
});

/*
This function iterates through my education object, swaps out the placeholder text
for the property values, and appends those property values to the education
section of the index.html resume file to display.
*/
education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedschoolURL = HTMLschoolURL.replace("%data%", school.url);
    var formattedEducation = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajor + formattedschoolURL;
    $(".education-entry:last").append(formattedEducation);
  });
  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourses.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourses.dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourses.url);
    var formattedonlineCourses = formattedTitle + formattedSchool + formattedonlineDates + formattedonlineURL;
    $(".education-entry:last").append(formattedonlineCourses);
  });
};
// This code executes the bio.display and education.display functions.
bio.display();
education.display();

// This appends the Google map to the index.html file to display
$("#mapDiv").append(googleMap);
