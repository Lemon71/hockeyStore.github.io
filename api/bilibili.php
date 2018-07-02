<?php
 $url ="http://api.bilibili.com/search?_device=android&_hwid=a45c088fa1c2eb26&appkey=c1b107428d337928&bangumi_num=1&build=404000&keyword=%E5%86%B0%E7%90%83&main_ver=v2&page=1&pagesize=20&platform=android&search_type=all&source_type=0&special_num=1&topic_num=1&upuser_num=1&sign=c378d978d69cc3300088df6e39269887";
 $answer= file_get_contents($url);
 echo $answer;