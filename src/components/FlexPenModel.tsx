"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, AlertCircle } from "lucide-react"
import type * as THREE from "three"

// Preload models for better performance
const preloadModels = () => {
  useGLTF.preload("/flexpen_Tresiba.glb")
  useGLTF.preload("/flexpen_model2.glb")
  useGLTF.preload("/flexpen_model3.glb")
}

// Error boundary component for model loading
const ModelErrorFallback = ({ error }: { error: string }) => (
  <mesh>
    <boxGeometry args={[1, 3, 0.2]} />
    <meshStandardMaterial color="red" />
  </mesh>
)

// Loading fallback component
const ModelLoadingFallback = () => (
  <mesh>
    <boxGeometry args={[1, 3, 0.2]} />
    <meshStandardMaterial color="gray" opacity={0.5} transparent />
  </mesh>
)

// GLB Model component with error handling
const FlexPenGLB = ({ modelPath }: { modelPath: string }) => {
  const [error, setError] = useState<string | null>(null)
  const { scene } = useGLTF(modelPath)

  if (!scene) {
    return <ModelErrorFallback error="Failed to load model scene" />
  }

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone()

  // Enable shadows on all meshes
  clonedScene.traverse((child) => {
    if (child.type === "Mesh") {
      const mesh = child as THREE.Mesh
      mesh.castShadow = true
      mesh.receiveShadow = true
    }
  })

  return <primitive object={clonedScene} />
}

// Custom model component (for your specific model structure)
const CustomFlexPenModel = ({ modelPath }: { modelPath: string }) => {
  const { nodes, materials } = useGLTF(modelPath)

  if (!nodes || !materials) {
    return <ModelErrorFallback error="Failed to load model nodes or materials" />
  }

  return (
    <group dispose={null}>
      {/* Rest of the component remains the same */}
      <group position={[0, 0.7, 0]}>
        {/* Liquid */}
        {nodes.liquid && (
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.liquid as THREE.Mesh).geometry}
            material={materials.Liquid}
            position={[0, 0.8, 0]}
          />
        )}
        {/* Head components */}
        <group position={[0, 1.2, 0]}>
          {nodes["aiguille_Head_Green-head"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes["aiguille_Head_Green-head"] as THREE.Mesh).geometry}
              material={materials.head}
            />
          )}
          {nodes["aiguille_Head_Green-metal_head"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes["aiguille_Head_Green-metal_head"] as THREE.Mesh).geometry}
              material={materials.metal_head}
            />
          )}
        </group>

        {/* Main body */}
        <group position={[0, 1, 0]}>
          {nodes.aiguille_Green_1 && (
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.aiguille_Green_1 as THREE.Mesh).geometry}
              material={(nodes.aiguille_Green_1 as THREE.Mesh).material}
            />
          )}
          {nodes["aiguille_Green-aiguille__"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes["aiguille_Green-aiguille__"] as THREE.Mesh).geometry}
              material={materials.aiguille__}
            />
          )}
          {/* Add other body components as needed */}
        </group>

        {/* Housing */}
        <group position={[0, 0.1, 0]}>
          {nodes["Housing_Green-aiguille__"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes["Housing_Green-aiguille__"] as THREE.Mesh).geometry}
              material={materials.aiguille__}
            />
          )}
          {nodes["Housing_Green-Housing_Label"] && (
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes["Housing_Green-Housing_Label"] as THREE.Mesh).geometry}
              material={materials.Housing_Label}
            />
          )}
        </group>

        {/* Other components */}
        {nodes.piston_Green && (
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.piston_Green as THREE.Mesh).geometry}
            material={materials["scale drum+Piston"]}
            position={[0, 0.5, 0]}
          />
        )}

        {nodes.Clutch_Green && (
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Clutch_Green as THREE.Mesh).geometry}
            material={materials.clutch}
            position={[0, -0.6, 0]}
          />
        )}

        {nodes.Push_button_Green && (
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Push_button_Green as THREE.Mesh).geometry}
            material={materials.aiguille__}
            position={[0, -0.6, 0]}
          />
        )}
      </group>
    </group>
  )
}

const FlexPenModel = () => {
  const [currentModel, setCurrentModel] = useState("pen1")
  const [modelType, setModelType] = useState<"simple" | "custom">("simple")
  const [error, setError] = useState<string | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera>()

  // Model options with actual GLB file paths
  const modelOptions = [
    {
      id: "pen1",
      name: "Tresiba Pen",
      path: "/flexpen_Tresiba.glb",
      type: "custom" as const,
    },
    {
      id: "pen2",
      name: "Pen Model 2",
      path: "/flexpen_model2.glb",
      type: "simple" as const,
    },
    {
      id: "pen3",
      name: "Pen Model 3",
      path: "/flexpen_model3.glb",
      type: "simple" as const,
    },
  ]

  const handleZoomIn = () => {
    if (cameraRef.current) {
      const camera = cameraRef.current
      camera.position.multiplyScalar(0.8)
      camera.updateProjectionMatrix()
    }
  }

  const handleZoomOut = () => {
    if (cameraRef.current) {
      const camera = cameraRef.current
      camera.position.multiplyScalar(1.2)
      camera.updateProjectionMatrix()
    }
  }

  const handleModelChange = (modelId: string) => {
    setCurrentModel(modelId)
    setError(null)

    const selectedModel = modelOptions.find((model) => model.id === modelId)
    if (selectedModel) {
      setModelType(selectedModel.type)
    }
  }

  const getCurrentModelPath = () => {
    const model = modelOptions.find((m) => m.id === currentModel)
    return model?.path || "/flexpen_Tresiba.glb"
  }

  const renderModel = () => {
    const modelPath = getCurrentModelPath()

    if (modelType === "custom") {
      return <CustomFlexPenModel modelPath={modelPath} />
    } else {
      return <FlexPenGLB modelPath={modelPath} />
    }
  }

  // Call preload when component mounts
  if (typeof window !== "undefined") {
    preloadModels()
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        onCreated={(state) => {
          cameraRef.current = state.camera as THREE.PerspectiveCamera
        }}
        shadows
      >
        <Suspense fallback={<ModelLoadingFallback />}>
          {/* Environment for better lighting */}
          <Environment preset="studio" />

          {/* Enhanced lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.3} />

          {/* Render the selected model */}
          {renderModel()}

          {/* Ground plane for shadows */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[10, 10]} />
            <shadowMaterial opacity={0.2} />
          </mesh>

          {/* Orbit controls for interaction */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Control Panel */}
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        {/* Zoom Controls */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <div className="flex flex-col gap-2">
            <Button size="sm" variant="outline" onClick={handleZoomIn} className="bg-white hover:bg-gray-50">
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={handleZoomOut} className="bg-white hover:bg-gray-50">
              <ZoomOut className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Model Selection */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Select Model</h3>
          <div className="flex flex-col gap-2">
            {modelOptions.map((model) => (
              <Button
                key={model.id}
                size="sm"
                variant={currentModel === model.id ? "default" : "outline"}
                onClick={() => handleModelChange(model.id)}
                className={`text-xs ${
                  currentModel === model.id ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-white hover:bg-gray-50"
                }`}
              >
                {model.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Status and Error Display */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <p className="text-xs text-gray-600">Current Model: {currentModel}</p>
        <p className="text-xs text-gray-600">Type: {modelType}</p>
        {error && (
          <div className="flex items-center gap-1 text-red-600 text-xs mt-1">
            <AlertCircle className="w-3 h-3" />
            <span>Error loading model</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default FlexPenModel
