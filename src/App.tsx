import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import {
  Instagram,
  Mail,
  Phone,
  Menu,
  X,
  Scissors,
  Film,
  Clapperboard,
  Wand2,
  Palette,
  MonitorPlay,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

// ============================================
// VIDEO DATA - Add your video URLs here later
// ============================================
const videoProjects = [
  {
    id: 1,
    title: "Song of the bow",
    videoUrl: "<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DOmEb9tDTGM/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DOmEb9tDTGM/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DOmEb9tDTGM/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Emmanuel Iren (@pst_iren)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>",
    category: "Social Media",
  },
  {
    id: 2,
    title: "Josh Trap Cover",
    videoUrl: "<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DVWW4zKDJii/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DVWW4zKDJii/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DVWW4zKDJii/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Joshua Samuel (@joshuasamvel)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>",
    category: "Music Video",
  },
  {
    id: 3,
    title: "Clips conversations",
    videoUrl: "<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C9sjsvysGc9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C9sjsvysGc9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C9sjsvysGc9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Tharde. (@thegreattharde)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>",
    category: "Personal Projects",
  },
  {
    id: 4,
    title: "Restored Testicles",
    videoUrl: "<iframe src="https://drive.google.com/file/d/17ofDXWyaPc0Vr2-4ASdigSQTMUqiGfiI/preview" width="640" height="480"></iframe>",
    category: "Excerpt",
  },
  {
    id: 5,
    title: "Child Testimony",
    videoUrl: "<iframe src="https://drive.google.com/file/d/17ph0N1FDZORgbV4GLgY_Tnzo0FBebcf4/preview" width="640" height="480"></iframe>",
    category: "Excerpt",
  },
  {
    id: 6,
    title: "Giants",
    videoUrl: "<iframe src="https://drive.google.com/file/d/1CLMGwdWb_HRE5o8i16NVezqETGFwCYwD/preview" width="640" height="480"></iframe>",
    category: "Social media",
  },
];

// ============================================
// SERVICES DATA
// ============================================
const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Video Editing",
    description: "Professional cuts, transitions, and pacing that bring your story to life with precision and creativity.",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Color Grading",
    description: "Transform the mood and atmosphere of your footage with cinematic color science and grading techniques.",
  },
  {
    icon: <Clapperboard className="w-8 h-8" />,
    title: "Post-Production",
    description: "End-to-end post-production services including VFX, sound design, and final delivery.",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Motion Graphics",
    description: "Eye-catching animations, titles, and visual effects that elevate your content.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Direction",
    description: "Strategic creative guidance to ensure your video content aligns with your brand and vision.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Social Media Content",
    description: "Optimized video content for Instagram, TikTok, YouTube, and other platforms.",
  },
];

// ============================================
// NOISE OVERLAY COMPONENT
// ============================================
function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// ============================================
// CUSTOM CURSOR COMPONENT
// ============================================
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".video-card")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 rounded-full bg-white pointer-events-none z-[9999] transition-transform duration-150 mix-blend-difference hidden md:block"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: isHovering ? "scale(3)" : "scale(1)",
        }}
      />
      <div
        className="fixed w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9998] transition-all duration-300 mix-blend-difference hidden md:block"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: isHovering ? "scale(0.5)" : "scale(1)",
          opacity: isHovering ? 0 : 1,
        }}
      />
    </>
  );
}

// ============================================
// GRADIENT BACKGROUND COMPONENT
// ============================================
function GradientBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 transition-all duration-1000 ease-out"
      style={{
        background: `
          radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, 
            rgba(139, 92, 246, 0.15) 0%, 
            transparent 50%
          ),
          radial-gradient(ellipse at ${100 - mousePos.x}% ${100 - mousePos.y}%, 
            rgba(236, 72, 153, 0.1) 0%, 
            transparent 50%
          ),
          #000000
        `,
      }}
    />
  );
}

// ============================================
// VIDEO CARD COMPONENT
// ============================================
function VideoCard({
  video,
  style,
  onHover,
}: {
  video: (typeof videoProjects)[0];
  style: React.CSSProperties;
  onHover: (id: number | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="video-card absolute cursor-pointer group"
      style={style}
      onMouseEnter={() => {
        onHover(video.id);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        onHover(null);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.pause();
        }
      }}
    >
      {/* Gradient Border */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Video Container */}
      <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        />

        {/* Placeholder while loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-xs text-violet-400 font-medium mb-1 uppercase tracking-wider">
            {video.category}
          </p>
          <h3 className="text-white font-bold text-lg">{video.title}</h3>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

// ============================================
// HEADER COMPONENT
// ============================================
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white font-bold text-xl tracking-tight hover:text-violet-400 transition-colors"
        >
          THARDE.
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-violet-500 to-pink-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://instagram.com/thegreattharde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-bold ${isActive ? "text-white" : "text-zinc-500"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://instagram.com/thegreattharde"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 text-zinc-500 hover:text-white transition-colors"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      )}
    </header>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 px-6 md:px-12 py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto text-zinc-500 text-xs">
        <p>© {new Date().getFullYear()} Tharde. All rights reserved.</p>
        <p className="hidden md:block">Video Editor & Creative Director</p>
        <a
          href="mailto:oyetadepeter5@gmail.com"
          className="hover:text-white transition-colors"
        >
          oyetadepeter5@gmail.com
        </a>
      </div>
    </footer>
  );
}

// ============================================
// HOME PAGE
// ============================================
function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [positions, setPositions] = useState<
    { x: number; y: number; width: number; rotation: number; zIndex: number }[]
  >([]);
  const [animations, setAnimations] = useState<
    { opacity: number; scale: number }[]
  >([]);

  const generatePositions = () => {
    const newPositions = videoProjects.map(() => {
      const width = 280 + Math.random() * 180;
      return {
        x: Math.random() * (window.innerWidth - width - 100) + 50,
        y: Math.random() * (window.innerHeight - width * 0.6 - 200) + 100,
        width,
        rotation: (Math.random() - 0.5) * 12,
        zIndex: Math.floor(Math.random() * 10),
      };
    });
    setPositions(newPositions);
    setAnimations(videoProjects.map(() => ({ opacity: 1, scale: 1 })));
  };

  useEffect(() => {
    generatePositions();

    // Staggered entrance animation
    videoProjects.forEach((_, index) => {
      setTimeout(() => {
        setAnimations((prev) => {
          const newAnims = [...prev];
          newAnims[index] = { opacity: 1, scale: 1 };
          return newAnims;
        });
      }, index * 150);
    });

    window.addEventListener("resize", generatePositions);
    return () => window.removeEventListener("resize", generatePositions);
  }, []);

  const handleShuffle = () => {
    generatePositions();
  };

  return (
    <div className="relative min-h-screen">
      {/* Shuffle Button */}
      <button
        onClick={handleShuffle}
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
      >
        Shuffle Layout
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>

      {/* Subtitle */}
      <div className="fixed top-32 left-1/2 -translate-x-1/2 text-center z-30">
        <p className="text-zinc-500 text-sm uppercase tracking-[0.3em]">
          Video Editor • Creative Director
        </p>
      </div>

      {/* Video Cards */}
      {positions.length > 0 &&
        videoProjects.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            style={{
              left: positions[index]?.x || 0,
              top: positions[index]?.y || 0,
              width: positions[index]?.width || 300,
              transform: `rotate(${positions[index]?.rotation || 0}deg)`,
              zIndex:
                hoveredId === video.id
                  ? 100
                  : positions[index]?.zIndex || index,
              opacity: animations[index]?.opacity || 0,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onHover={setHoveredId}
          />
        ))}
    </div>
  );
}

// ============================================
// ABOUT PAGE
// ============================================
function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-violet-400 text-sm uppercase tracking-[0.3em] mb-4">
            About Me
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            I'm Tharde.
            <br />
            <span className="text-zinc-500">A video editor who</span>
            <br />
            <span className="text-zinc-500">tells stories.</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <div className="w-full aspect-square bg-gradient-to-br from-violet-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
              <div className="text-center">
                <p className="text-6xl font-bold text-white/20">T</p>
                <p className="text-zinc-500 mt-2">Your Photo Here</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I'm a passionate video editor based in Nigeria, dedicated to
              transforming raw footage into compelling visual stories that
              captivate audiences and drive results.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              With expertise in commercial editing, music videos, and
              documentary filmmaking, I bring a unique blend of technical
              precision and creative vision to every project.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              My approach is simple: understand your vision, exceed your
              expectations, and deliver work that makes an impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-zinc-500 text-sm">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">3+</p>
                <p className="text-zinc-500 text-sm">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">30+</p>
                <p className="text-zinc-500 text-sm">Clients</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:oyetadepeter5@gmail.com"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-violet-400 transition-colors"
            >
              Let's work together
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SERVICES PAGE
// ============================================
function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-violet-400 text-sm uppercase tracking-[0.3em] mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            What I can
            <br />
            <span className="text-zinc-500">do for you.</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-violet-400 mb-6 group-hover:text-pink-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Ready to bring your vision to life?
          </h2>
          <a
            href="mailto:oyetadepeter5@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CONTACT PAGE
// ============================================
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AProject Type: ${formData.project}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:oyetadepeter5@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-violet-400 text-sm uppercase tracking-[0.3em] mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Let's create
            <br />
            <span className="text-zinc-500">something amazing.</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">
                  Project Type
                </label>
                <select
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                  required
                >
                  <option value="" className="bg-black">
                    Select a service
                  </option>
                  <option value="Video Editing" className="bg-black">
                    Video Editing
                  </option>
                  <option value="Color Grading" className="bg-black">
                    Color Grading
                  </option>
                  <option value="Motion Graphics" className="bg-black">
                    Motion Graphics
                  </option>
                  <option value="Full Production" className="bg-black">
                    Full Production
                  </option>
                  <option value="Other" className="bg-black">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href="mailto:oyetadepeter5@gmail.com"
                  className="text-white text-xl hover:text-violet-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  oyetadepeter5@gmail.com
                </a>
              </div>

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+2348106926908"
                  className="text-white text-xl hover:text-violet-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +234 810 692 6908
                </a>
              </div>

              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/thegreattharde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-violet-400 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  @thegreattharde
                </a>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-zinc-400 leading-relaxed">
                  Based in Nigeria, working with clients worldwide. Available
                  for freelance projects and long-term collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <CustomCursor />
        <GradientBackground />
        <NoiseOverlay />
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}