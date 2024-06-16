import { useState } from "react";
import styles from './Target.module.css'
import ChCalculatorService from '@/services/ChCalculatorService';

const Target = () => {
    const [target, setTarget] = useState({
        chIn100Gram: '',
        chYouWantToEat: '',
    });

    const [comment, setComment] = useState({
        message: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setTarget({ ...target, [name]: value });
    }

    const resetFields = () => {
        setTarget({
            chIn100Gram: '',
            chYouWantToEat: ''
        })
    }

    const calculate = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const chIn100Gram = target.chIn100Gram === '' ? NaN : Number(target.chIn100Gram);
        const chYouWantToEat = target.chYouWantToEat === '' ? NaN : Number(target.chYouWantToEat);
        if (isNaN(chIn100Gram) || isNaN(chYouWantToEat)) {
            setComment({ message: 'Please provide valid numbers!' });
        } else if (chIn100Gram > 100) {
               setComment({ message: '100 gram food cannot contain more than 100 gram CH!' })
        } else {
            ChCalculatorService.calculateTarget({ chIn100Gram, chYouWantToEat })
            .then((response) => {
                setComment({message: 'The amount of food containing the target CH (' + target.chYouWantToEat + 'g) is ' + response.data.toFixed(2) + 'g.'})
                console.log(response);
            }).catch((error) => {
                setComment({message: 'Something went wrong! Please check the data provided!'})
                console.log(error.response.data);
                console.log(error);
            });
        }
    }

    return(        
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.bg2}></div>
            <div className={styles.bg3}></div>
            <ul className={styles.ul}>
                <li>
                    <a 
                        href="https://gmszm.hu/ch-calculator/portion"
                        className={styles.a}>
                        PORTION
                    </a>
                </li>
            </ul>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img 
                        className={styles.img}
                        src="/img/CHlogo2.png" 
                        width={150} 
                        height={150}
                        alt="logo" />
                    <h1 
                        className={styles.h1}>
                        Calculator
                    </h1>
                </div>
                <div className={styles.form}>
                    <div className={styles.formElement}>
                        <label 
                            className={styles.label}
                            htmlFor="chYouWantToEat">
                            Target: 
                        </label>
                        <input 
                            className={styles.input}
                            type="text"
                            name="chYouWantToEat" 
                            id="chYouWantToEat" 
                            placeholder="gram of CH to contain"
                            value={target.chYouWantToEat}
                            onChange={(e) => handleChange(e)}
                            required={true}/>
                    </div>
                    <div className={styles.formElement}>
                        <label 
                            className={styles.label}
                            htmlFor="ch100">
                            100g/ CH: 
                        </label>
                        <input 
                            className={styles.input}
                            type="text" 
                            name="chIn100Gram" 
                            id="ch100" 
                            placeholder="check package for CH in 100g"
                            value={target.chIn100Gram}
                            onChange={(e) => handleChange(e)}
                            required={true}/>
                    </div>
                    <h2 className={styles.h2}>{comment.message}</h2>
                    <button 
                        className={styles.submit} 
                        type='submit'
                        onClick={calculate}>
                        Calculate
                    </button>
                    <button 
                        className={styles.reset} 
                        type='reset'
                        onClick={resetFields}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Target;