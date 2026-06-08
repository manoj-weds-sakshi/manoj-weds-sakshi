// Wedding data extracted from wedding_invitation_extraction.md
// Sourced from the official invitation card - 100% English translation

export const weddingData = {
  // Section 1: Invocation
  invocation: {
    ganeshMantra: {
      salutation: "Salutations to Lord Ganesha",
      line1: "O Lord with a curved trunk and massive form, radiant like millions of suns.",
      line2: "O Lord, please remove all obstacles from my work at all times.",
    },
    vishnuMantra: {
      salutation: "Salutations to Lord Chitragupta",
      line1: "Auspiciousness to Lord Vishnu.",
      line2: "Auspiciousness to the one whose emblem is Garuda.",
      line3: "Auspiciousness to the lotus-eyed one.",
      line4: "May Lord Hari bring auspiciousness.",
    },
    welcome: "Dear Relatives & Beloved Ones,",
    intro: "By the boundless grace of the Almighty and the blessed merit of our ancestors, a joyous auspicious ceremony is being celebrated in our family.....",
    inviteRequest: "Please grace this sacred moment with your presence and bless the newly married couple.",
    fortune: "Your gracious presence will be our good fortune.",
  },

  // Section 2: Couple
  couple: {
    title: "Manoj weds Sakshi",
    weddingTitle: "An Auspicious Union",
    groom: {
      title: "Manoj",
      lineage: "Grandson of Late Smt. Bhagwati Devi & Late Shri Shyamlal Ji Shrivastava",
      parents: "Son of Smt. Dropadi & Shri Narendra Shrivastava",
      residence: "Resident of Bhopal (M.P.)",
    },
    bride: {
      title: "Sakshi",
      lineage: "Granddaughter of Late Smt. Beena Devi & Late Shri Harinarayan Ji Shrivastava",
      parents: "Daughter of Smt. Kamla Devi & Late Shri Kailash Ji Shrivastava",
      residence: "Resident of Raisen (M.P.)",
    },
  },

  // Section 3: Timeline (Sanskar Belaen)
  timeline: {
    sectionTitle: "Auspicious Ceremonies",
    events: [
      {
        id: "ganesh-pujan",
        name: "Ganesh Pujan & Mata Pujan",
        sub: "Worship of Lord Ganesha and the Divine Mother",
        calendarDate: "Jyeshtha Shukla 3, Vikram Samvat 2083",
        day: "Wednesday",
        date: "17 June 2026",
        venue: "Family Residence, Patel Nagar, Bhopal",
        time: "",
      },
      {
        id: "mandap-chhaya",
        name: "Mandap Chhaya",
        sub: "The Sacred Canopy Ceremony",
        calendarDate: "Jyeshtha Shukla 4, Vikram Samvat 2083",
        day: "Thursday",
        date: "18 June 2026",
        venue: "Family Residence, Patel Nagar, Bhopal",
        time: "",
      },
      {
        id: "panigrahan",
        name: "Panigrahan Sanskar",
        sub: "The Sacred Marriage Solemnization",
        calendarDate: "Jyeshtha Shukla 5, Vikram Samvat 2083",
        day: "Friday",
        date: "19 June 2026",
        venue: "Palak Palace & Resort, Khajuri Kala, Bypass Road, Bhopal",
        time: "7:00 PM onward",
      },
    ],
  },

  // Section 4: Grand Celebration
  celebration: {
    swaruchiBhojTitle: "Blessing Ceremony & Grand Welcome Feast",
    baraatNote: "Note: The auspicious time for the Baraat procession is 7:00 PM on Friday, 19 June 2026",
    date: "Friday, 19 June 2026",
    time: "From 7:00 PM until your arrival",
    venue: "Wedding Venue: Palak Palace & Resort, Khajuri Kala, Bypass Road, Bhopal (M.P.)",
    venueShort: "Palak Palace & Resort",
    venueAddress: "Khajuri Kala, Bypass Road, Bhopal (M.P.)",
  },

  // Section 5: Family Hierarchy
  family: {
    // Column 1: Vineet (Respectfully Yours)
    vineet: {
      label: "Respectfully Yours",
      members: [
        "Santosh Kumar – Smt. Krishna Shrivastava",
        "Ashok Kumar – Smt. Anjana Shrivastava",
        "Narendra Kumar – Smt. Dropadi Shrivastava",
      ],
    },

    // Column 2: Darshanabhilashi (Eagerly Awaiting)
    darshanabhilashi: {
      label: "Eagerly Awaiting Your Arrival",
      members: [
        "Smt. Sushila Devi (Buaaji)",
        "Surendra – Smt. Meena Shrivastava",
        "Kamlesh – Smt. Jyoti Shrivastava",
        "Sanjeev – Smt. Shobha Shrivastava",
        "Entire Shrivastava Family",
      ],
    },

    // Column 3: Prafullit Hridaya (With Joyful Hearts)
    prafullitHridaya: {
      label: "With Joyful Hearts",
      members: [
        "Praveen – Annapurna",
        "Shailendra – Neha",
        "Rashmi – Akhilesh Ji",
        "Naina – Hemant Ji",
        "Manisha – Arun Ji",
        "Namita – Rupesh Ji",
        "Amit – Sonam",
        "Ashish – Divya",
        "Saurabh – Nandani",
        "Anant – Anushka",
        "Arvind – Sunita",
        "Atul – Roshni",
        "Ankit Ji",
        "Aditya Ji",
      ],
    },

    // Column 4: Harshit Nanihal (Maternal Relatives)
    harshitNanihal: {
      label: "Joyful Maternal Relatives",
      members: [
        "Shri Jugal Kishore – Smt. Gayatri",
        "Shri Rajkishore – Smt. Preeti",
        "Shri Ramprasad – Smt. Krishna",
        "Shri Govind Prasad – Smt. Kaushalya",
        "Shri Madanlal – Smt. Savitri",
      ],
    },

    // Bottom: Komal Aagrah (Children)
    komalAagrah: {
      label: "A Humble Request from the Little Ones",
      children: [
        "Darshita",
        "Alankrita (Kinjal)",
        "Vedang",
        "Vedansh",
        "Stuti",
        "Arnav",
        "Amey",
        "Bhavya",
        "Paridhi",
        "Daivik",
        "Abhya",
        "Parthvi",
        "Aniruddh",
      ],
    },
  },

  // Contact & RSVP
  contact: {
    senderNames: ["Santosh Kumar Shrivastava", "Narendra Kumar Shrivastava"],
    address: "C-82, Patel Nagar, Raisen Road, Bhopal – 462022",
    mobiles: ["8516082275", "9425654048", "9584727486"],
  },
};
