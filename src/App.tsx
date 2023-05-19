import React from 'react';
import './App.css';
import Stopwatch from "./Stopwatch";


function App() {
    return (
        <div>
            <div className="App">
                <div className="App-header">
                    <div className="App-block">
                        <div className="App-bloc-title">Prepare</div>
                        <Stopwatch triggerKey="i" description="(i) -> search Information (Notion, Web...)"/>
                        <Stopwatch triggerKey="Q" description="(Q) -> Question peers (andon, slack...)"/>
                        <Stopwatch triggerKey="r" description="(r) -> Redaction (ticketing, schema...)"/>
                        <Stopwatch triggerKey="s" description="(s) -> ticket Sizing"/>
                        <Stopwatch triggerKey="S" description="(S) -> Slideware (prepare slides...)"/>
                        <Stopwatch triggerKey="B" description="(B) -> RDP"/>
                    </div>
                    <div className="App-block">
                        <div className="App-bloc-title">Meetings</div>
                        <Stopwatch triggerKey="A" description="(A) -> Atelier Tech"/>
                        <Stopwatch triggerKey="m" description="(m) -> project meeting with PO/Stakeholder"/>
                        <Stopwatch triggerKey="o" description="(o) -> TheOdo meeting (guilde, speedco,...)"/>
                    </div>
                    <div className="App-block">
                        <div className="App-bloc-title">Code</div>
                        <Stopwatch triggerKey="d"
                                   description="(d) -> search Documentation (fmk doc, stackoverflow...)"/>
                        <Stopwatch triggerKey="c" description="(c) -> write Code (manage syntax)"/>
                        <Stopwatch triggerKey="t" description="(t) -> write Tests"/>
                        <Stopwatch triggerKey="R" description="(R) -> refactoring"/>
                        <Stopwatch triggerKey="n" description="(n) -> Navigating in code (search, switch...)"/>
                        <Stopwatch triggerKey="p" description="(p) -> challenge with Peers (MR...)"/>
                    </div>
                </div>
                <div className="App-header">
                    <div className="App-block">
                        <div className="App-bloc-title">Publish</div>
                        <Stopwatch triggerKey="P" description="(P) -> prepare publish (lint, pretty, commit...)"/>
                        <Stopwatch triggerKey="z" description="(z) -> push"/>
                        <Stopwatch triggerKey="w" description="(w) -> wait for CI or CD results"/>
                        <Stopwatch triggerKey="f" description="(f) -> fix issues found after CI/CD"/>
                    </div>
                    <div className="App-block">
                        <div className="App-bloc-title">Fix</div>
                        <Stopwatch triggerKey="e" description="(e) -> Setup environment (local, AWS...)"/>
                        <Stopwatch triggerKey="x" description="(x) -> eXecute tests"/>
                        <Stopwatch triggerKey="D" description="(D) -> Debug"/>
                        <Stopwatch triggerKey="M" description="(M) -> Search in tools (logs, db,...)"/>
                    </div>
                </div>
            </div>
            <div className="App-block">
                <div className="App-bloc-legend">Press '0' to RESET ALL timers</div>
                <div className="App-bloc-legend">ALT click to RESET on time</div>
            </div>
        </div>
    );
}

// Hook

export default App;
