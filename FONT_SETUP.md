# Font Setup Instructions

To complete the font setup, you need to download the fonts from Fontshare and add them to your project.

## Step 1: Download Boxing Font

1. Visit https://www.fontshare.com/fonts/boxing
2. Click "Download family"
3. Extract the downloaded ZIP file
4. Copy this file to `public/fonts/`:
   - `Boxing-Regular.woff2`

## Step 2: Download General Sans Font

1. Visit https://www.fontshare.com/fonts/general-sans
2. Click "Download family"
3. Extract the downloaded ZIP file
4. Copy these files to `public/fonts/`:
   - `GeneralSans-Regular.woff2`
   - `GeneralSans-Medium.woff2`
   - `GeneralSans-Semibold.woff2`
   - `GeneralSans-Bold.woff2`

## Step 3: Create fonts directory

Create the fonts directory if it doesn't exist:
```powershell
mkdir public\fonts
```

## File Structure

After copying, your directory should look like:
```
public/
└── fonts/
    ├── Boxing-Regular.woff2
    ├── GeneralSans-Regular.woff2
    ├── GeneralSans-Medium.woff2
    ├── GeneralSans-Semibold.woff2
    └── GeneralSans-Bold.woff2
```

## Usage

Once the fonts are in place:
- **Boxing** will automatically be used for all headings (h1, h2, h3, h4, h5, h6)
- **General Sans** will be used for body text
- You can use `font-heading` class to apply Boxing font to other elements

## Note

The fonts are already configured in the project. Once you add the font files to `public/fonts/`, they will work automatically.

The dev server will hot-reload and pick up the fonts!
