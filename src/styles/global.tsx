import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --background: #121214;
        --color-white-fixed: #ffff;
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey4: #121214;
        --color-grey3: #212529;
        --color-grey2: #343B41;
        --color-grey1: #868E96;
        --color-grey0: #F8F9FA;
        --negative:#E83F5B;
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
    }

    html, body{
        width: 100vw;
        height: 100vh;
        background-color: var(--background);
        display: flex;
        justify-content: center;
    }
    
`;
