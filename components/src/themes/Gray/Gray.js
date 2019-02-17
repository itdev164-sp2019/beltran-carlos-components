const theme = {
    space: [0,4,8,16,32,64,128,256,512],
    lineHeight: {
        solid: 1,
        title: 1.25,
        copy: 1.5
    },
    letterSpacings:{
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.5em',
        mega: '0.25em'
    },
    borders: [
         0,
         '1px solid',
         '2px solid',
         '3px solid',
         '4px solid',
         '8px solid',
         '16px solid',
         '32px solid',
    ],
    colors: {
        primary: {
            light: 'hsl(208, 13%, 35%)',
            main: 'hsl(208, 13%, 25%)',
            dark: 'hsl(208, 13%, 15%)',
            contrastText: '#ffffff'
        },
        text: {
            primary: 'hsl(208, 13%, 15%)',
            secondary: 'hsl(208, 13%, 45%)',
            disabled: 'hsl(208, 13%, 75%)',
            hint: 'hsl(208, 13%, 75%)'
        }
    }
}

const defaults = {
    button: {
        padding: `${theme[2] / 16}em ${(theme.space[3] = 4) / 16}em`,
        border: theme.borders[3],
        textTransform: 'uppercase',
        letterSpacing: theme.letterSpacings.tracked
    }
}
const variants ={
    button: {
        primary: {
            ...defaults.button,
            colors: theme.colors.primary.main,
            borderColor: theme.colors.primary.main
        },
        contrast: {
            ...defaults.button,
            color: theme.colors.primary.contrastText,
            borderColor: theme.colors.primary.contrastText
        }
    },
    linkButton: {
        primary: {
            color: theme.colors.primary.main
        },
        contrast: {
            color: theme.colors.primary.contrastText
        }
    }

}
const Gray = {...theme, defaults, variants }

export { Gray }