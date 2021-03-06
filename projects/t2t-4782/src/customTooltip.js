export class CustomTooltip {
    init(params) {
      const eGui = (this.eGui = document.createElement('div'));
      const color = params.color || 'white';
      const data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;
      console.log(params.value)
      
      eGui.classList.add('custom-tooltip');
      eGui.style['background-color'] = color;
      eGui.innerHTML = `
      <p>
      <span class"name">${params.value}</span>
      </p>
      <p>
      <span>Country: </span>
      ${data.country}
      </p>
      <p>
      <span>Total: </span>
      ${data.total}
      </p>
      `;
    }
    
    getGui() {
      return this.eGui;
    }
  }