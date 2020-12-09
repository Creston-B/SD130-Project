const solve=function(){},importFromFile=function(){},exportToFile=function(){},checkInput=function(){},maxlength=function(e){e.value.length>1&&(e.value=e.value.slice(0,1))};class Puzzle{constructor(){this.puzzleArray=Array.from(Array(9),(()=>new Array(9))),this.buildNewPuzzle=function(){for(let e=0;e<9;e++)for(let t=0;t<9;t++)this.puzzleArray[e][t]=new Cell}}}class Cell{constructor(e,t=!1){this.value=e,this.fixed=t}}const generateTable=function(e){let t="";for(let n=0;n<9;n++){t+="<tr>\n";for(let l=0;l<9;l++)t+=generateCell(n,l,e)+"\n";t+="</tr>\n"}return t},generateCell=function(e,t,n){let l=n[e][t],r="",o="";l.fixed&&(r=" fixed"),l.value&&(o=l.value);let u=`<td class="puzzleCell${r}"><input type="number" id="cell-${String.fromCharCode(e+97)}${t+1}" min="1" max="9" step="1" oninput="maxlength(this)"></td>`;return u.value=o,u};window.addEventListener("DOMContentLoaded",(e=>{console.log("loaded");const t=document.getElementById("puzzle"),n=document.getElementById("license-label"),l=document.querySelector(".license");n.addEventListener("mouseover",(e=>{l.classList="license"})),n.addEventListener("mouseout",(e=>{l.classList="license hidden"}));let r=new Puzzle;r.buildNewPuzzle(),t.innerHTML=generateTable(r.puzzleArray)}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic29sdmUiLCJpbXBvcnRGcm9tRmlsZSIsImV4cG9ydFRvRmlsZSIsImNoZWNrSW5wdXQiLCJtYXhsZW5ndGgiLCJlIiwidmFsdWUiLCJsZW5ndGgiLCJzbGljZSIsIlB1enpsZSIsIltvYmplY3QgT2JqZWN0XSIsInRoaXMiLCJwdXp6bGVBcnJheSIsIkFycmF5IiwiZnJvbSIsImJ1aWxkTmV3UHV6emxlIiwicm93IiwiY29sIiwiQ2VsbCIsInZhbCIsImZpeCIsImZpeGVkIiwiZ2VuZXJhdGVUYWJsZSIsInRhYmxlSFRNTCIsImdlbmVyYXRlQ2VsbCIsInRhcmdldENlbGwiLCJjZWxsIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJwdXp6bGVET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGljZW5zZUxhYmVsIiwibGljZW5zZUJveCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJwdXp6bGUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQU1BLE1BQU1BLE1BQVEsYUFJUkMsZUFBaUIsYUFJakJDLGFBQWUsYUFJZkMsV0FBYSxhQUliQyxVQUFZLFNBQVVDLEdBQ3RCQSxFQUFFQyxNQUFNQyxPQUFTLElBQUdGLEVBQUVDLE1BQVFELEVBQUVDLE1BQU1FLE1BQU0sRUFBRyxLQUdyRCxNQUFNQyxPQUNKQyxjQUNFQyxLQUFLQyxZQUFjQyxNQUFNQyxLQUFLRCxNQUFNLElBQUksSUFBTSxJQUFJQSxNQUFNLEtBR3hERixLQUFLSSxlQUFpQixXQUNwQixJQUFLLElBQUlDLEVBQU0sRUFBR0EsRUFBTSxFQUFHQSxJQUN6QixJQUFLLElBQUlDLEVBQU0sRUFBR0EsRUFBTSxFQUFHQSxJQUN6Qk4sS0FBS0MsWUFBWUksR0FBS0MsR0FBTyxJQUFJQyxPQU8zQyxNQUFNQSxLQUNKUixZQUFZUyxFQUFLQyxHQUFNLEdBQ3JCVCxLQUFLTCxNQUFRYSxFQUNiUixLQUFLVSxNQUFRRCxHQUlqQixNQUFNRSxjQUFnQixTQUFVVixHQUM5QixJQUFJVyxFQUFZLEdBQ2hCLElBQUssSUFBSVAsRUFBTSxFQUFHQSxFQUFNLEVBQUdBLElBQU8sQ0FDaENPLEdBQWEsU0FDYixJQUFLLElBQUlOLEVBQU0sRUFBR0EsRUFBTSxFQUFHQSxJQUN6Qk0sR0FBYUMsYUFBYVIsRUFBS0MsRUFBS0wsR0FBZSxLQUVyRFcsR0FBYSxVQUVmLE9BQU9BLEdBR0hDLGFBQWUsU0FBVVIsRUFBS0MsRUFBS0wsR0FDdkMsSUFBSWEsRUFBYWIsRUFBWUksR0FBS0MsR0FDaENJLEVBQVEsR0FDUmYsRUFBUSxHQUVObUIsRUFBV0osUUFDYkEsRUFBUSxVQUdOSSxFQUFXbkIsUUFDYkEsRUFBUW1CLEVBQVduQixPQUlyQixJQUFJb0IsRUFBTyx3QkFBd0JMLG9DQUF3Q00sT0FBT0MsYUFBYVosRUFBTSxNQUFNQyxFQUFNLDhEQUVqSCxPQURBUyxFQUFLcEIsTUFBUUEsRUFDTixHQUtUdUIsT0FBT0MsaUJBQWlCLG9CQUFxQnpCLElBQzNDMEIsUUFBUUMsSUFBSSxVQUVaLE1BQU1DLEVBQVlDLFNBQVNDLGVBQWUsVUFDcENDLEVBQWVGLFNBQVNDLGVBQWUsaUJBQ3ZDRSxFQUFhSCxTQUFTSSxjQUFjLFlBRTFDRixFQUFhTixpQkFBaUIsYUFBYXpCLElBQ3pDZ0MsRUFBV0UsVUFBWSxhQUd6QkgsRUFBYU4saUJBQWlCLFlBQVl6QixJQUN4Q2dDLEVBQVdFLFVBQVksb0JBR3pCLElBQUlDLEVBQVMsSUFBSS9CLE9BQ2pCK0IsRUFBT3pCLGlCQUNQa0IsRUFBVVEsVUFBWW5CLGNBQWNrQixFQUFPNUIiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGF0ZTogXCIyMDIwLTEyLTA5XCJcclxuLy8gYXV0aG9yOiBDcmVzdG9uIEJhcmtlclxyXG4vLyBkZXNjcmlwdGlvbjogU3Vkb2t1IHNpdGUganMgYW5kIHB1enpsZSBsb2dpY1xyXG5cclxuXHJcblxyXG5jb25zdCBzb2x2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGltcG9ydEZyb21GaWxlID0gZnVuY3Rpb24gKCkge1xyXG5cclxufVxyXG5cclxuY29uc3QgZXhwb3J0VG9GaWxlID0gZnVuY3Rpb24gKCkge1xyXG5cclxufVxyXG5cclxuY29uc3QgY2hlY2tJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IG1heGxlbmd0aCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYgKGUudmFsdWUubGVuZ3RoID4gMSkgZS52YWx1ZSA9IGUudmFsdWUuc2xpY2UoMCwgMSk7XHJcbn1cclxuXHJcbmNsYXNzIFB1enpsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnB1enpsZUFycmF5ID0gQXJyYXkuZnJvbShBcnJheSg5KSwgKCkgPT4gbmV3IEFycmF5KDkpKTtcclxuICAgIGxldCB0YWJsZUhUTUw7XHJcblxyXG4gICAgdGhpcy5idWlsZE5ld1B1enpsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgOTsgcm93KyspIHsgLy9sb3dlcmNhc2UgOTctMTA2XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgOTsgY29sKyspIHtcclxuICAgICAgICAgIHRoaXMucHV6emxlQXJyYXlbcm93XVtjb2xdID0gbmV3IENlbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIENlbGwge1xyXG4gIGNvbnN0cnVjdG9yKHZhbCwgZml4ID0gZmFsc2UpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWw7XHJcbiAgICB0aGlzLmZpeGVkID0gZml4O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVUYWJsZSA9IGZ1bmN0aW9uIChwdXp6bGVBcnJheSkge1xyXG4gIGxldCB0YWJsZUhUTUwgPSBgYDtcclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA5OyByb3crKykge1xyXG4gICAgdGFibGVIVE1MICs9IGA8dHI+XFxuYFxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgOTsgY29sKyspIHtcclxuICAgICAgdGFibGVIVE1MICs9IGdlbmVyYXRlQ2VsbChyb3csIGNvbCwgcHV6emxlQXJyYXkpICsgYFxcbmA7XHJcbiAgICB9XHJcbiAgICB0YWJsZUhUTUwgKz0gYDwvdHI+XFxuYFxyXG4gIH1cclxuICByZXR1cm4gdGFibGVIVE1MO1xyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZUNlbGwgPSBmdW5jdGlvbiAocm93LCBjb2wsIHB1enpsZUFycmF5KSB7XHJcbiAgbGV0IHRhcmdldENlbGwgPSBwdXp6bGVBcnJheVtyb3ddW2NvbF0sXHJcbiAgICBmaXhlZCA9IGBgLFxyXG4gICAgdmFsdWUgPSBgYDtcclxuXHJcbiAgaWYgKHRhcmdldENlbGwuZml4ZWQpIHtcclxuICAgIGZpeGVkID0gYCBmaXhlZGA7XHJcbiAgfVxyXG5cclxuICBpZiAodGFyZ2V0Q2VsbC52YWx1ZSkge1xyXG4gICAgdmFsdWUgPSB0YXJnZXRDZWxsLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy9sb3dlcmNhc2UgbGV0dGVycyBhLWkgPSA5Ny0xMDYsIHVzZWQgaW4gY2hhcmNvZGVcclxuICBsZXQgY2VsbCA9IGA8dGQgY2xhc3M9XCJwdXp6bGVDZWxsJHtmaXhlZH1cIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiY2VsbC0ke1N0cmluZy5mcm9tQ2hhckNvZGUocm93ICsgOTcpfSR7Y29sICsgMX1cIiBtaW49XCIxXCIgbWF4PVwiOVwiIHN0ZXA9XCIxXCIgb25pbnB1dD1cIm1heGxlbmd0aCh0aGlzKVwiPjwvdGQ+YDtcclxuICBjZWxsLnZhbHVlID0gdmFsdWU7XHJcbiAgcmV0dXJuIChjZWxsKTtcclxufVxyXG5cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGxvYWRlZGApXHJcblxyXG4gIGNvbnN0IHB1enpsZURPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwdXp6bGVgKTtcclxuICBjb25zdCBsaWNlbnNlTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGljZW5zZS1sYWJlbGApO1xyXG4gIGNvbnN0IGxpY2Vuc2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGljZW5zZWApO1xyXG5cclxuICBsaWNlbnNlTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihgbW91c2VvdmVyYCwgZSA9PiB7XHJcbiAgICBsaWNlbnNlQm94LmNsYXNzTGlzdCA9IGBsaWNlbnNlYFxyXG4gIH0pXHJcblxyXG4gIGxpY2Vuc2VMYWJlbC5hZGRFdmVudExpc3RlbmVyKGBtb3VzZW91dGAsIGUgPT4ge1xyXG4gICAgbGljZW5zZUJveC5jbGFzc0xpc3QgPSBgbGljZW5zZSBoaWRkZW5gXHJcbiAgfSlcclxuXHJcbiAgbGV0IHB1enpsZSA9IG5ldyBQdXp6bGUoKTtcclxuICBwdXp6bGUuYnVpbGROZXdQdXp6bGUoKTtcclxuICBwdXp6bGVET00uaW5uZXJIVE1MID0gZ2VuZXJhdGVUYWJsZShwdXp6bGUucHV6emxlQXJyYXkpO1xyXG5cclxufSk7Il19
