import React, { Component } from "react";
import Header from "../Header";
import Animation from "../Animation";
import "./index.css";
import DayWordItem from "../DayWordItem";
const events = [
  {
    day: "Today",
    action: "Inert",
    about: "not able to move or act",
    pos: "Adjective",
    use: "Helium is an inert Gas.",
  },
  {
    day: "Yesterday",
    action: "Decorum",
    about: "grace",
    pos: "Noun",
    use: "Maintaining decorum in school is necesary.",
  },
  {
    day: "Wednesday",
    action: "Compassion",
    about: "pity",
    pos: "Noun",
    use: "People with too much ego don't show any compassion.",
  },
  {
    day: "Tuesday",
    action: "Facilitate",
    about: "to make less difficult",
    pos: "Verb",
    use: "Schools were located in the same campus to facilitate the sharing of resources.",
  },
  {
    day: "Monday",
    action: "Distill",
    about: "extract the essential elements",
    pos: "Verb",
    use: "They managed to distill a small quantity of water.",
  },
  {
    day: "Sunday",
    action: "Evident",
    about: "to say that something is clear,easily seen, or understood.",
    pos: "adjective",
    use: "Raj eagerness to learn is evident in the way he keeps asking for new lists of idioms and their meanings.",
  },
  {
    day: "Saturday",
    action: "Defame",
    about: "to malign; harm someone's reputation",
    pos: "Verb",
    use: "The newspaper was used for defamation after publishing lies about a celebrity.",
  },
];
class DayWord extends Component {
  state = { index: 0 };

  previousDay = () => {
    const { index } = this.state;
    let newIndex;
    if (index === 0) newIndex = events.length - 1;
    else newIndex = index - 1;
    this.setState({ index: newIndex });
  };

  nextDay = () => {
    const { index } = this.state;
    const newIndex = (index + 1) % events.length;
    console.log(newIndex);
    this.setState({ index: newIndex });
  };

  render() {
    const { index } = this.state;
    return (
      <div className="app-container">
        <Header />
        <Animation />
        <div className="dayword-container">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGo2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMS0yM1QxNToxNDozMSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMTZUMDA6Mzk6MDUrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMTZUMDA6Mzk6MDUrMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIxIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRG90IEdhaW4gMTUlIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2ZWQ5MTVhLWIwMjgtZTM0Yi1hMWUxLTI0MjBkMGM2M2I5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmZTA4MThhNC1jNDE1LTZiNDgtYjhjNC1kZjEwYzU1YjAwNmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZTA4MThhNC1jNDE1LTZiNDgtYjhjNC1kZjEwYzU1YjAwNmIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlMDgxOGE0LWM0MTUtNmI0OC1iOGM0LWRmMTBjNTViMDA2YiIgc3RFdnQ6d2hlbj0iMjAyMS0xMS0yM1QxNToxNDozMSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjQ4MWIyYTYtOWI1OS03NjRiLTliNzktZDQ3MTA5MGFlOWViIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTI4VDE1OjM2OjUzKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmVkOTE1YS1iMDI4LWUzNGItYTFlMS0yNDIwZDBjNjNiOTYiIHN0RXZ0OndoZW49IjIwMjItMDYtMTZUMDA6Mzk6MDUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XGLh9wAAEcFJREFUeNrt3Xts1fUdx+FvD13DsOWcARPCHENua7nNG205FsQbMOacIxONcV4xmoUYwxhBYxxhzhDHjDOZMYx0jKAhBjdnOgRWGUJbWgTnBYFxEeOQuAr4K7RYUcvqMjfjsg2nZ63n+zzJ7w9NTJNPOOf96om0qRMnQvDk+fPex3uOfqHjvI6fnnj7ybK+Cz/uf+uJ7yl61ZOPj/fO/H9SAT6ktV/HecXNBesLbg1FU647+P3Vo/sudBWA/CMA+Of4r+i4/v3x/+CfC2aHQhEAIADI9/GfUVD90X8vAgAEAJGNvwgAEABEOv4iAEAAEOn4iwAAAUA+jf+VJz/+IgBAABDp+IsAAAFApOMvAgAEAJGO/79EwH1973JdAAFABOP/4QiYPPXg7atH9xniygACgG7k/Y/pczH+//hDVBp6Ti469Mzafj2vcm0AAUA3MXXboXm1Sy4fn9M/SFtCnwtnv/WT9TXpDhcHEAB0ExfNXNmY6wjoMS8MrBqZ7Ns4ON3o4gACgIgioHBwGDJ+Q9J344b0WhcHEADEFAGnhWHjByenb9yZXu3iAAKA2CKgVzJUBAAIAEQAAAKAbhEB1SIAQAAgAkQAgABABIgAAAGACBABAAIAESACAAQA+RMBKy4fJwIABACxRcBVK7c81fCdJ0OlCAAQAETlwqrHpv3h8GU3igAAAUBkzt/z2+qNxZd8M2RDzn7DnwgAEAB0QxPW/a6m/tKvnxKqRACAACAq596xur2hz5SfiQAAAUBksjVrZzcsmnKTCAAQAMQWAdm11Q1LplwvAgAEALFFwMi1y0QAgABABIgAAAGACBABAAIAESAC8t7bX/Lk44MAABEAIABABAAIABABAAIAESACAAQAIkAEAAgARIAIABAAiAARACAAEAEiAEAAIAJEAIAAQASIAAABgAgQAQACABEgAgAEACJABAAIAEQAAAIAEQCAAEAEAAgAEAEAAgBEAIAAABEAIABABAAIABABAAIARACAAAARACAAQAQACAAQAQACAEQAgAAAEQAgABABIgBAACACRACAAEAEiAAAAYAIEAEAAgARIAIABAAiQAQAAgBEgAgABACIABEACAAQASIAEAAgAkQAIABABAAIABABAAIARACAAAARACAAQAQACAAQAQACAEQAgAAAEQAgAEAEAAgAEAEAAgBEAIAAABEAIADg/xwBfZKh9aWZXi4OCACIKQL6dUbA/jd3v1jU7y4XBwQARBQBqdYwcMyKN36481j/C1wcEAAQQwR88GqbHlKlR15/SgQAAgDyPQI++kobEIIIAAQA5HME/LtXmQgABABE8kmACAAEAEQQASfzChMBgACAPIqAj/PqEgGAAIA8iID/5ZUlAgABAJ/hCPgkryoRAAgA+AxGwKfxihIBgACAz/AnASIAEACQpxEw8UMR8Gm/mkQAIACge0ZA4+ipTWFWZwTk6pUkAgABAN1P5UNrsi/decXD4WAOv4gIAAQAdD+jBj56zd5FN34+p19EBAACALqfoQur2/fOEwGAAAARIAIAAQAiQAQAAgBEgAgABACIABEACAAQASIAEAAgAkQAIABABIgAQACACBABgAAAESACAAEAIgBAAIAIABAAIAIAAQCIAEAAACIAEACACAAEACACAAEAiABAAAAiABAAgAgABAAgAgABAIgAQAAAIgAQACACRAAgAEAEiABAAIAIEAGAAAARIAIAAQAiQAQAAgBEgAgABACIgJOLgOT1p7YN6tfq4iAAgJgiYGAIo8a+8c6mLZl1Lg4CAIgoAgpqQqb81je/svFAutbFQQAAsURARwg96sKQ8e8mX9m4M73axUEAABF9ElB4Whg2vlcyVASAAABii4BBnRFQLAJAAADxREDqQ58EiAAQAEAeR0DH398pPvJuIQJAAAD5HAH/4V1CBIAAAPL9kwARAAIAEAEiAAQAIAJEAAgAQASIABAAgAgABAAgAgABAIgAQAAAIgAQAIAIAAQAIAIAAQB82hHQLgJAAADRRcDuO699MjwgAkAAAFEZvmjZtGdHfysdJv7tdwCKABAAQCzOuuCJIw21U34UsiIABAAQlWzR2vkNS6ZcLwJAAACxRcDItctEAAgAQASIABAAgAgQASAAABEgAkAAACJABIAAAESACAABAIgAEQACABABIgAEACACRAAIAEAEiAAQAIAIAAQAIAIAAQCIAEAAACIAEACACAAEACACQAAAiAAQAAAiAAQAgAgAAQAgAkAAAIgAEAAAIgAEAIAIAAEAIAJAAAAiQASAAABEgAgAAQCIABEAAgAQASIABAAgAkQACABABIgAEACACPivEZCkV7k4AgAgtghoTYaLAAQAgAgAAQAgAkAAAOR/BPgfAxEAABFGgL8dgAAAEAEgAABEAAgAABEAAgBABIAAABABIAAARAAIAAARAAIAQASA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"
            alt="leftArrow"
            className="arrow arrow-left"
            onClick={this.previousDay}
          />
          <DayWordItem event={events[index]} />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGo2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMS0yM1QxNToxNDozMSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMTZUMDA6Mzk6MDUrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMTZUMDA6Mzk6MDUrMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIxIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRG90IEdhaW4gMTUlIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2ZWQ5MTVhLWIwMjgtZTM0Yi1hMWUxLTI0MjBkMGM2M2I5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmZTA4MThhNC1jNDE1LTZiNDgtYjhjNC1kZjEwYzU1YjAwNmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZTA4MThhNC1jNDE1LTZiNDgtYjhjNC1kZjEwYzU1YjAwNmIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlMDgxOGE0LWM0MTUtNmI0OC1iOGM0LWRmMTBjNTViMDA2YiIgc3RFdnQ6d2hlbj0iMjAyMS0xMS0yM1QxNToxNDozMSswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjQ4MWIyYTYtOWI1OS03NjRiLTliNzktZDQ3MTA5MGFlOWViIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTI4VDE1OjM2OjUzKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmVkOTE1YS1iMDI4LWUzNGItYTFlMS0yNDIwZDBjNjNiOTYiIHN0RXZ0OndoZW49IjIwMjItMDYtMTZUMDA6Mzk6MDUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XGLh9wAAEcFJREFUeNrt3Xts1fUdx+FvD13DsOWcARPCHENua7nNG205FsQbMOacIxONcV4xmoUYwxhBYxxhzhDHjDOZMYx0jKAhBjdnOgRWGUJbWgTnBYFxEeOQuAr4K7RYUcvqMjfjsg2nZ63n+zzJ7w9NTJNPOOf96om0qRMnQvDk+fPex3uOfqHjvI6fnnj7ybK+Cz/uf+uJ7yl61ZOPj/fO/H9SAT6ktV/HecXNBesLbg1FU647+P3Vo/sudBWA/CMA+Of4r+i4/v3x/+CfC2aHQhEAIADI9/GfUVD90X8vAgAEAJGNvwgAEABEOv4iAEAAEOn4iwAAAUA+jf+VJz/+IgBAABDp+IsAAAFApOMvAgAEAJGO/79EwH1973JdAAFABOP/4QiYPPXg7atH9xniygACgG7k/Y/pczH+//hDVBp6Ti469Mzafj2vcm0AAUA3MXXboXm1Sy4fn9M/SFtCnwtnv/WT9TXpDhcHEAB0ExfNXNmY6wjoMS8MrBqZ7Ns4ON3o4gACgIgioHBwGDJ+Q9J344b0WhcHEADEFAGnhWHjByenb9yZXu3iAAKA2CKgVzJUBAAIAEQAAAKAbhEB1SIAQAAgAkQAgABABIgAAAGACBABAAIAESACAAQA+RMBKy4fJwIABACxRcBVK7c81fCdJ0OlCAAQAETlwqrHpv3h8GU3igAAAUBkzt/z2+qNxZd8M2RDzn7DnwgAEAB0QxPW/a6m/tKvnxKqRACAACAq596xur2hz5SfiQAAAUBksjVrZzcsmnKTCAAQAMQWAdm11Q1LplwvAgAEALFFwMi1y0QAgABABIgAAAGACBABAAIAESAC8t7bX/Lk44MAABEAIABABAAIABABAAIAESACAAQAIkAEAAgARIAIABAAiAARACAAEAEiAEAAIAJEAIAAQASIAAABgAgQAQACABEgAgAEACJABAAIAEQAAAIAEQCAAEAEAAgAEAEAAgBEAIAAABEAIABABAAIABABAAIARACAAAARACAAQAQACAAQAQACAEQAgAAAEQAgABABIgBAACACRACAAEAEiAAAAYAIEAEAAgARIAIABAAiQAQAAgBEgAgABACIABEACAAQASIAEAAgAkQAIABABAAIABABAAIARACAAAARACAAQAQACAAQAQACAEQAgAAAEQAgAEAEAAgAEAEAAgBEAIAAABEAIADg/xwBfZKh9aWZXi4OCACIKQL6dUbA/jd3v1jU7y4XBwQARBQBqdYwcMyKN36481j/C1wcEAAQQwR88GqbHlKlR15/SgQAAgDyPQI++kobEIIIAAQA5HME/LtXmQgABABE8kmACAAEAEQQASfzChMBgACAPIqAj/PqEgGAAIA8iID/5ZUlAgABAJ/hCPgkryoRAAgA+AxGwKfxihIBgACAz/AnASIAEACQpxEw8UMR8Gm/mkQAIACge0ZA4+ipTWFWZwTk6pUkAgABAN1P5UNrsi/decXD4WAOv4gIAAQAdD+jBj56zd5FN34+p19EBAACALqfoQur2/fOEwGAAAARIAIAAQAiQAQAAgBEgAgABACIABEACAAQASIAEAAgAkQAIABABIgAQACACBABgAAAESACAAEAIgBAAIAIABAAIAIAAQCIAEAAACIAEACACAAEACACAAEAiABAAAAiABAAgAgABAAgAgABAIgAQAAAIgAQACACRAAgAEAEiABAAIAIEAGAAAARIAIAAQAiQAQAAgBEgAgABACIgJOLgOT1p7YN6tfq4iAAgJgiYGAIo8a+8c6mLZl1Lg4CAIgoAgpqQqb81je/svFAutbFQQAAsURARwg96sKQ8e8mX9m4M73axUEAABF9ElB4Whg2vlcyVASAAABii4BBnRFQLAJAAADxREDqQ58EiAAQAEAeR0DH398pPvJuIQJAAAD5HAH/4V1CBIAAAPL9kwARAAIAEAEiAAQAIAJEAAgAQASIABAAgAgABAAgAgABAIgAQAAAIgAQAIAIAAQAIAIAAQB82hHQLgJAAADRRcDuO699MjwgAkAAAFEZvmjZtGdHfysdJv7tdwCKABAAQCzOuuCJIw21U34UsiIABAAQlWzR2vkNS6ZcLwJAAACxRcDItctEAAgAQASIABAAgAgQASAAABEgAkAAACJABIAAAESACAABAIgAEQACABABIgAEACACRAAIAEAEiAAQAIAIAAQAIAIAAQCIAEAAACIAEACACAAEACACQAAAiAAQAAAiAAQAgAgAAQAgAkAAAIgAEAAAIgAEAIAIAAEAIAJAAAAiQASAAABEgAgAAQCIABEAAgAQASIABAAgAkQACABABIgAEACACPivEZCkV7k4AgAgtghoTYaLAAQAgAgAAQAgAkAAAOR/BPgfAxEAABFGgL8dgAAAEAEgAABEAAgAABEAAgBABIAAABABIAAARAAIAAARAAIAQASA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"
            alt="leftArrow"
            className="arrow"
            onClick={this.nextDay}
          />
        </div>
      </div>
    );
  }
}

export default DayWord;
