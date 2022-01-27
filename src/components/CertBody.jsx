import React from "react";

const CertBody = () => {
    return <section class="section2">
        <div class="container has-text-centered">
            <h1 class="subtitle" id="technologies">Certifications</h1>
            <div class="columns">
                <div class="column"><i class="fas fa-network-wired"></i>
                    <h2 class="subtitle dg">CCNA</h2>
                    <p>This Cisco certification demonstrates a deep fundamental understanding of networking concepts:</p>
                    <br />
                    <ul>
                        <li>TCP/IP</li>
                        <li>Cisco IOS</li>
                        <li>Architecting Networks</li>
                        <li>OSI Models</li>
                        <li>Routing Protocols (EIGRP & OSPF)</li>

                    </ul>
                </div>
                <div class="column"><i class="fas fa-laptop"></i>
                    <h2 class="subtitle dg">CompTIA A+</h2>
                    <p>This CompTIA certification demonstrates a deep fundamental understanding of IT concepts:</p>
                    <br />
                    <ul>
                        <li>Hardware</li>
                        <li>Virtualization</li>
                        <li>Troubleshooting</li>
                        <li>Operating Systems</li>
                        <li>Security</li>

                    </ul>
                </div>
                <div class="column"><i class="fas fa-server"></i>
                    <h2 class="subtitle dg">CompTIA Network+</h2>
                    <p>This CompTIA certification demonstrates a deep fundamental understanding of Networking concepts:</p>
                    <br />
                    <ul>
                        <li>Ports and Protocols</li>
                        <li>Network Fundamentals</li>
                        <li>Networking Hardware</li>
                        <li>Navigating Router and Switch CLI</li>
                        <li>Setting up inbound and outbound firewall rules</li>

                    </ul>
                </div>
            </div>

        </div>
    </section>
}

export default CertBody;