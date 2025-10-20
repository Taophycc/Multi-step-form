# Multi-Step Form

![Project Preview](./preview.jpg)

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQ9). This project is a responsive multi-step form that allows users to enter their personal information, select a plan, choose add-ons, and see a summary of their selections before confirming their order.

## ✨ Features

- **Multi-step sequence:** Users can complete each step of the form in a sequential manner.
- **Navigation:** Users can go back to a previous step to update their selections.
- **Summary and confirmation:** Users can see a summary of their selections on the final step and confirm their order.
- **Responsive design:** The layout is optimized for both mobile and desktop devices.
- **Form validation:** Users receive form validation messages if a field is missed, the email address is not formatted correctly, or a step is submitted without a selection.
- **Hover and focus states:** All interactive elements on the page have hover and focus states.

## 🚀 Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📦 Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/your_repository_.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```

## 📂 Project Structure

```
/
├── public/
│   ├── design/
│   ├── fonts/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── SelectableBox.jsx
│   │   ├── SideBar.jsx
│   │   └── Step.jsx
│   ├── pages/
│   │   ├── AddOns.jsx
│   │   ├── PersonalInfo.jsx
│   │   ├── SelectPlan.jsx
│   │   ├── Summary.jsx
│   │   └── ThankYou.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── package.json
└── ...
```

## ✍️ Author

- Website - [Taophycc.com](https://github.com/taophycc)
- Frontend Mentor - [@taophycc](https://www.frontendmentor.io/profile/taophycc)
- Twitter - [@taophyc_](https://www.twitter.com/taophyc_)

## 🙏 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) - For providing the challenge.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - For the comprehensive documentation.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - For the amazing utility-first CSS framework.
