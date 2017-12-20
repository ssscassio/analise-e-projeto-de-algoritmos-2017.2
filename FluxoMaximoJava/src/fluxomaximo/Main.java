/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluxomaximo;

import fluxomaximo.Util.FordFulkerson;
import fluxomaximo.Util.Graph;
import fluxomaximo.Util.GraphReader;

/**
 *
 * @author KHAICK O. BRITO
 */
public class Main {
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        GraphReader graphReader = new GraphReader();
        graphReader.readGraph("graphData.txt");
        
        Graph graph = graphReader.getGraph();
        int sourceVertex = graphReader.getSourceVertex();
        int destinyVertex = graphReader.getDestinyVertex();
        
        FordFulkerson fluxoMaximo = new FordFulkerson(graph, sourceVertex, destinyVertex);
        
    }
    
}
