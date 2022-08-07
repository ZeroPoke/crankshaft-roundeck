export var EMERALD0874Outline:String
EMERALD0874Outline = `

https://github.com/EMERALD0874
MIT License

Copyright (c) 2022 EMERALD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

:root {
	--round-radius-size: none;
  }
  
  .BasicUI .appportrait_LibraryItemBox_WYgDg.Focusable:focus {
	outline: none;
	border: 2px solid rgba(255, 255, 255, 0.6);
	border-radius: calc(20px + 2px);
	margin: -2px;
  }
  
  @keyframes appportrait_growOutline_3wk3d {
	0% {
	  border: 12px solid;
	  margin: -12px;
	  border-radius: calc(20px + 10px);
	}
	100% {
	  border: 2px solid;
	  margin: -2px;
	  border-radius: calc(20px + 2px);
	}
  }
  @keyframes appportrait_fadeOutline_1FLuV {
	0% {
	  border-color: rgba(255, 255, 255, 0);
	}
	100% {
	  border-color: rgba(255, 255, 255, 0.6);
	}
  }
  @keyframes appportrait_blinker_2tSbN {
	50% {
	  border: 2px solid rgba(255, 255, 255, 0.24);
	}
  }
  
  .focusring_FocusRing_1IZrQ {
	outline: none;
	border: 2px solid rgba(255, 255, 255, 0.6);
	border-radius: calc(20px + 2px);
	margin: -2px;
	animation: focusring_growOutline_Z3LxS_alt 0.4s ease,
	  focusring_fadeOutline_2hZu3_alt 0.4s ease,
	  focusring_blinker_3wFMM_alt 1.2s ease-in-out 0.4s 20;
  }
  
  @keyframes focusring_growOutline_Z3LxS_alt {
	0% {
	  border: 12px solid;
	  margin: -12px;
	  border-radius: calc(20px + 10px);
	}
	100% {
	  border: 2px solid;
	  margin: -2px;
	  border-radius: calc(20px + 2px);
	}
  }
  @keyframes focusring_fadeOutline_2hZu3_alt {
	0% {
	  border-color: rgba(255, 255, 255, 0);
	}
	100% {
	  border-color: rgba(255, 255, 255, 0.6);
	}
  }
  @keyframes focusring_blinker_3wFMM_alt {
	50% {
	  border: 2px solid rgba(255, 255, 255, 0.24);
	}
  }
  
  /* exceptions */
  .BasicUI
	.appdetailssection_AppDetailsSectionContainer_31ptF.appdetailssection_RightColumnSection_3KfxI
	> .focusring_FocusRingRoot_3PH_X
	> .focusring_FocusRing_1IZrQ,
  .appactivityday_NoCommentSupport_2CB_R
	> .appactivityday_EventBody_NEMXh
	> .Panel
	> .focusring_FocusRingRoot_3PH_X
	> .focusring_FocusRing_1IZrQ,
  .controllerconfiguratorchoosebinding_ChooseBindingContainer_1Kj9l
	> .gamepadtabbedpage_GamepadTabbedPage_3IBLc
	> .gamepadtabbedpage_TabContents_WDa0_
	> .overlappingtransition_TransitionGroup_11Twu
	> .overlappingtransition_ContentWrapper_1knAs
	> .Panel
	> .gamepadtabbedpage_TabContentsScroll_1X4dt
	> .focusring_FocusRingRoot_3PH_X
	> .focusring_FocusRing_1IZrQ {
	border: none;
	outline: 2px solid rgba(255, 255, 255, 0.6);
	border-radius: 0px;
	margin: 0px;
	animation: focusring_growOutline_Z3LxS 0.4s ease,
	  focusring_fadeOutline_2hZu3 0.4s ease,
	  focusring_blinker_3wFMM 1.2s ease-in-out 0.4s 20;
  }
`;