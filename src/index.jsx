import Application from './application';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('application');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Application/>);
