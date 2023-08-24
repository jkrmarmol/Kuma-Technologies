import BIMSImages from '../assets/images/bims-6e6c93f3.png';
import SMSImages from '../assets/images/sms-44ed7099.png';
import type { ProductInfo } from '../typings/interfaces';


const productItems: Array<ProductInfo> = [
  {
    title: 'Barangay Information Management System',
    description: 'BIMS provides LGUs with a centralized database of information that can be accessed and updated easily, allowing them to track and monitor the needs and activities of the barangay more efficiently.',
    images: BIMSImages,
    link: ''
  },
  {
    title: 'School Management System',
    description: 'A School Management System streamlines operations, enhances communication, automates tasks, improves efficiency, and provides a user-friendly, secure, and scalable solution for schools to manage student enrollment, attendance, scheduling, grading, and reporting.',
    images: SMSImages,
    link: ''
  }
]

export default productItems;