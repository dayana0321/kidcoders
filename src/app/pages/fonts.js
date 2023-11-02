import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// Luego, carga tus fuentes personalizadas en el VFS
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Ahora, carga tus fuentes personalizadas. Por ejemplo:
import RobotoRegular from './path-to-your-fonts/Roboto-Regular.ttf';

// Define tu definición de fuente personalizada
const customFonts = {
  Roboto: {
    normal: RobotoRegular,
  },
};

// Registra tus fuentes personalizadas con pdfMake
pdfMake.fonts = {
  ...pdfMake.fonts,
  customFonts,
};
