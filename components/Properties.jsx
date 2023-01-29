import Button from '../shared/Button';
import Card from '../shared/Card';

const Properties = ()=>{
    return(
        <div className="p-12  xl:mx-80">
            <h3 className="text-xl text-primary">10 سال تجربه موفق</h3>
            <div className="flex flex-col gap-4 mt-12 md:flex-row">
                <Button title="18.000 میلیارد تومان دارایی تحت مدیریت" />
                
                <Button title="بیش از 7000 سرمایه گذار فعال" />
            </div>
            <div className="cards grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
                <Card title="برترین صندوق سهامی ایران با نشان 5 ستاره" />
                <Card title="برترین صندوق سهامی ایران با نشان 5ستاره" />
                <Card title="برترین صندوق سهامی ایران با نشان 5ستاره" />
            </div>
        </div>
    )
}

export default Properties;