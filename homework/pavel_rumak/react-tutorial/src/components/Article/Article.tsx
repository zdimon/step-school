import React from 'react'

interface Props {
    readonly title?: string
    readonly date: string
}


const Article = (props: Props) => {
    const{ title: t1, date: d1 } = props
    
    React.useEffect(() => {
        return () => {
            console.log('unmount')
        }
    })
    return (
        <div>
            <p>  {t1}</p>
            
            <p>  {d1}</p>
            
        </div>
    )
}



export { Article }



