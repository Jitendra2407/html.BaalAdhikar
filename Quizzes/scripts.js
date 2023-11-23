document.addEventListener('DOMContentLoaded', function () {
  // Quiz 1 content
  document.getElementById('quiz1').innerHTML = `
      <h2>Quiz 1: Rights Match-Up</h2>
      <ol>
          <li>
              <label for="q1-a">Right to Education</label>
              <select id="q1-a" name="q1-a">
                  <option value="A">A. Ensures every child has the opportunity to learn and go to school.</option>
                  <option value="B">B. Grants children the freedom to express their thoughts and opinions.</option>
                  <option value="C">C. Guarantees a safe and nurturing environment, shielding children from harm.</option>
                  <option value="D">D. Recognizes the importance of recreation and leisure in a child's development.</option>
              </select>
          </li>
          <!-- Add similar list items for the other rights -->

          <li>
              <label for="q1-a">Right to Play</label>
              <select id="q1-a" name="q1-a">
                  <option value="A">A. Ensures every child has the opportunity to learn and go to school.</option>
                  <option value="B">B. Grants children the freedom to express their thoughts and opinions.</option>
                  <option value="C">C. Guarantees a safe and nurturing environment, shielding children from harm.</option>
                  <option value="D">D. Recognizes the importance of recreation and leisure in a child's development.</option>
              </select>
          </li>

          <li>
              <label for="q1-a">Right to Protection</label>
              <select id="q1-a" name="q1-a">
                  <option value="A">A. Ensures every child has the opportunity to learn and go to school.</option>
                  <option value="B">B. Grants children the freedom to express their thoughts and opinions.</option>
                  <option value="C">C. Guarantees a safe and nurturing environment, shielding children from harm.</option>
                  <option value="D">D. Recognizes the importance of recreation and leisure in a child's development.</option>
              </select>
          </li>

          <li>
              <label for="q1-a">Right to Expression</label>
              <select id="q1-a" name="q1-a">
                  <option value="A">A. Ensures every child has the opportunity to learn and go to school.</option>
                  <option value="B">B. Grants children the freedom to express their thoughts and opinions.</option>
                  <option value="C">C. Guarantees a safe and nurturing environment, shielding children from harm.</option>
                  <option value="D">D. Recognizes the importance of recreation and leisure in a child's development.</option>
              </select>
          </li>

          
      </ol>
  `;

  // Quiz 2 content
  document.getElementById('quiz2').innerHTML = `
      <h2>Quiz 2: True or False</h2>
      <ol>
          <li>
              <label for="q2-a">Every child has the right to be protected from discrimination.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>
          <!-- Add similar list items for the other statements -->
          <li>
              <label for="q2-a">Child labor is a violation of a child's right to education.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">Children have the right to participate in decisions that affect them.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">Child labor is a violation of a child's right to education.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">The Convention on the Rights of the Child (CRC) is a legally binding international treaty.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">The principle of "non-discrimination" in children's rights means that certain groups of children can be excluded based on cultural or religious reasons.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">Article 12 of the CRC guarantees a child's right to participate in decisions affecting them and to have their opinions taken into account.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">The right to education is not explicitly mentioned in the CRC.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">The right to education is not explicitly mentioned in the CRC.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>

          <li>
              <label for="q2-a">The CRC recognizes the right of every child to rest and leisure, play and recreational activities.</label>
              <input type="radio" id="q2-a-true" name="q2-a" value="True">
              <label for="q2-a-true">True</label>
              <input type="radio" id="q2-a-false" name="q2-a" value="False">
              <label for="q2-a-false">False</label>
          </li>
      </ol>
  `;

  // Puzzle content
  document.getElementById('puzzles').innerHTML = `
      <h2>Puzzle: Word Search</h2>
      <!-- Insert your word search grid here -->
      <div id="wordSearchGrid">
          C H I L D R E N
          R I G H T S
          E Q U A L I T Y
          P R O T E C T I O N
          E D U C A T I O N
          P A R T I C I P A T I O N
          R E S P E C T
          H E A L T H
      </div>


      <h2>Puzzle: Crossword</h2>
      <table id="crossword">
          <!-- Insert your crossword grid here -->
          <tr>
          <td>D</td>
          <td></td>
          <td>E</td>
          <td></td>
          <td></td>
          <td>R</td>
          <td></td>
          <td></td>
          <td></td>
          <td>N</td>
      </tr>
      <tr>
          <td></td>
          <td>E</td>
          <td></td>
          <td>E</td>
          <td></td>
          <td>D</td>
          <td>U</td>
          <td>C</td>
          <td>A</td>
          <td></td>
      </tr>
      <tr>
          <td>P</td>
          <td></td>
          <td></td>
          <td></td>
          <td>E</td>
          <td></td>
          <td></td>
          <td>R</td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td></td>
          <td>R</td>
          <td></td>
          <td></td>
          <td>E</td>
          <td></td>
          <td>H</td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>A</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      </table>
  `;
});
