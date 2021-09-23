import React from 'react';


function ClaculatorLayout() {
    return (
        <div button type="button" class="btn btn-dark" Dark>
            <div>
                <table>
                    <tr>
                        <th button type="button" class="btn btn-dark" Dark>7</th>
                        <th button type="button" class="btn btn-dark" Dark>8</th>
                        <th button type="button" class="btn btn-dark" Dark>9</th>
                       
                    </tr>
                    <tr>
                        <th button type="button" class="btn btn-dark" Dark>4</th>
                        <th button type="button" class="btn btn-dark" Dark>5</th>
                        <th button type="button" class="btn btn-dark" Dark>6</th>
                        
                    </tr>
                    <tr>
                        <th button type="button" class="btn btn-dark" Dark>1</th>
                        <th button type="button" class="btn btn-dark" Dark>2</th>
                        <th button type="button" class="btn btn-dark" Dark>3</th>
                        
                    </tr>
                    <tr>
                        <th button type="button" class="btn btn-dark" Dark>0</th>
                        <th button type="button" class="btn btn-dark" Dark>.</th>
                        <th button type="button" class="btn btn-dark" Dark>=</th>  
                    </tr>
                    

                </table>
            </div>
        </div>
    );
}

export default ClaculatorLayout;