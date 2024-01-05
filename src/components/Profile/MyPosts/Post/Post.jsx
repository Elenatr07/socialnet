import React from 'react'
import style from './Post.module.css'

export default function Post(props) {
  return (
    <div className={style.post}>
        <img className={style.post_avatar} src='https://yandex-images.clstorage.net/Zfx4P7232/0488c0GQ/_tXFcBkfxTUxxMXLWAKM82vUIcuHBSMNc-_FfwW0jfUH323swOvhpXUlp8SStOxNbPrwYSL14m2SO0i_PT1gQZuR0PRt24E05AHBeu1CDMM79fQfthTmrTY-YVrAYPgQgk9Yv3YMtvdjsmSDJfYrzNn-NFBUA2YIZi0rfprPNuUu1QcAGj32IyGGxl0LgL1hyhUkKXQVRm70XfXowHOs8lVarZ_nnDY3kzC3M-U0KL_by6Yh1TAwGDT9CJya_HRFroSHgNhOFPGTlFZN-bM-4Uuld8nmxKbOltxGuYGBXQFnaX6cVZ_0t7CQV5GUlovdeyv3kJVgoji3_UutyR7UBnymN6MrXDeS8YeXjhnDD1FYJUS5B5R1Pmc-1Ajjke4D5XptXMZ9hKWgYmbQNuWpfClahcG1M8K6dS9JzVtPFQePlTYQSb6EUIIX1oyaAM5DWLWHSEfURG107dUYQKHP8JWKPJxEbIekETAW0xVWaY_Jq5fidMDSymatGZ4qTVYkfgZ18WicxzEzt5bN6wIMU4mlV7lXN0a_dx31SpBhHeM2GR7N5mz0NBIQxDP3RipuSppkchUQU0jFP4qfKS8Vxw40tgAL34QzciWFX0vj_AFp5OQrV2bX7pbtRVrBgVyBdLjtLgWMlocTcLVzpRU5_ftLhuE0YbBbRM6aXEj8xZRdx_YDq55FkMI3pO87wq-ASQW0uiXGhO93DtVKcKNs4Veq_qx3nPXVgTO0gXbUKT05m5fh1ePQKjeeur347adVbhbUAfgORvCRJFd_qSEcUVgmh0s1p-V-tO3muGDirrHnGx2sJy4UlCLAVgNHpftvmfu2IVeQEJunv0m-Wt9Vdm-ll8JbL2Ty86f071sSDtNqhxc75kcFH4Uth5iTwY1wFVq9nvbdh-TTEPUx5VW7falLhNH14aF45y6LvKicJda81_WyKF70EbCFBl7JodyR66SEe3VEpv_G7nWIcFD88'></img>
        <span>{props.message}</span>
        <div>Like {props.likesCount}</div>
        </div>
        
  )
}
